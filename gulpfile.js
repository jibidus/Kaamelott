var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var fs = require('fs');
var gutil = require('gulp-util');
var replace = require('replace');
					  
var paths = {
	sass: ['./scss/**/*.scss'],
	characters: ['./scss/characters.scss'],
	characters_img_folder: './www/img/characters/',
	css: './www/css/'
};

// Update characters.scss with the list of all characters
gulp.task('list-characters', function() {
	var all_characters = [];

	var files = fs.readdirSync(paths.characters_img_folder);
	files.filter(function (file) {
        return fs.statSync(paths.characters_img_folder + file).isFile() && file.match(/_256\.png$/);
    }).map(function (file) {
		return file.replace(/_256\.png$/,'');
	}).forEach(function (file) {
        all_characters.push(file);
    });

	replace({
		regex: /\$all_characters: [^;]*;/,
		replacement: "$all_characters: " + all_characters.join(' ') + ";",
		paths: paths.characters,
		recursive: false,
		silent: true,
	});
	
	gutil.log("Character list updated in " + paths.characters + " with " + all_characters.length + " characters.");
});


// Generate css from scss files
gulp.task('sass', function(done) {
  gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest(paths.css))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.css))
    .on('end', done);
});


gulp.task('watch', function() {
  gulp.watch(paths.sass, ['list-characters', 'sass']);
});

gulp.task('default', ['list-characters', 'sass']);


