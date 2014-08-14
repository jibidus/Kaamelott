angular.module('kaamelott.controllers', [])

.controller('DailySentencesController', function($scope, $ionicSlideBoxDelegate, Sentences, Books) {

	// This means only 5 slides max (2 previous, 2 next, and the one is shown) will be in the DOM. 
	var bufferedSlides = 2;
	
	$scope.sentences = [];
	$scope.sentences.push(Sentences.get(0));
	repeat(10, function() {
		var lastSentence = $scope.sentences[$scope.sentences.length-1];
		var nextSentence = Sentences.next(lastSentence);
		$scope.sentences.push(nextSentence);
	});
//	$ionicSlideBoxDelegate.update();
	
	$scope.next = function() {
		$ionicSlideBoxDelegate.next();
	};
	$scope.previous = function() {
		$ionicSlideBoxDelegate.previous();
	};
	
	$scope.onSlideChanged = function(newSlideIndex) {
		console.log("----------- after slide changed");
	   console.log("Want to go: " + (newSlideIndex+1) + " / " + $scope.sentences.length);
	   console.log("Current slide: " + ($ionicSlideBoxDelegate.currentIndex()+1));

	   var nbPreviousSlidesOutOfBuffer = newSlideIndex+1 - bufferedSlides - 1;
	   var nbNextSlidesOutOfBuffer = ($scope.sentences.length - (newSlideIndex+1)) - bufferedSlides;

	   console.log("Remove " + nbPreviousSlidesOutOfBuffer + " previous slide(s)...");
	   removePreviousSlides(nbPreviousSlidesOutOfBuffer);
	   
	   //console.log("Remove " + nbNextSlidesOutOfBuffer + " next slide(s)...");
	   //removeNextSlides(nbNextSlidesOutOfBuffer);

	   console.log("Current: " + ($ionicSlideBoxDelegate.currentIndex()+1) + " / " + $scope.sentences.length);
	   $ionicSlideBoxDelegate.update();
   };
   
   function removePreviousSlides(nbSlides){
	   if (nbSlides > 0) {
		   repeat(nbSlides, function() {
			   $scope.sentences.shift();
			   $ionicSlideBoxDelegate.slide($ionicSlideBoxDelegate.currentIndex()--);
			   $scope.slideIndex--;
		   });
	   } else {
		   repeat(-nbSlides, function() {
			   var firstSentence = $scope.sentences[0];
			   var previousSentence = Sentences.previous(firstSentence);
			   if (previousSentence != null) {
				   $scope.sentences.unshift(previousSentence);
				   $ionicSlideBoxDelegate.slide($ionicSlideBoxDelegate.currentIndex()++);
			   } else {
				   // TODO Manage loop in service
				   console.log("Cannot add previous slide: first slide reached");
			   }
		   });
	   }
   }
   
   function removeNextSlides(nbSlides){
	   if (nbSlides > 0) {
		   repeat(nbSlides, function() {
			   $scope.sentences.pop();
		   });
	   } else {
		   repeat(-nbSlides, function() {
			   var lastSentence = $scope.sentences[$scope.sentences.length-1];
			   var nextSentence = Sentences.next(lastSentence);
			   if (nextSentence != null) {
				   $scope.sentences.push(nextSentence);
			   } else {
				   // TODO manage loop (in service)
//				   if (currentSentenceIndex >= Sentences.size()) {
//				   Sentences.shuffle();
//				   currentSlideIndex = -1;
				   // TODO will raise duplicate when inserting into sentences
//			   }
			   }
		   });
	   }
   }
   
   function repeat(times, callback) {
	   var i = 1;
	   while(i <= times) {
		   callback();
		   i++;
	   }
   }
   
   $scope.updateRate = function() {
	   console.debug("new rate: ");
   };
   
   $scope.maxRate = function() {
	   return [1, 2, 3, 4 ];
   };
   
   // Go to first slide
//   $scope.onSlideChanged(0);
   
})

.controller('QuizController', function($scope, Quiz, Characters, Books) {

	$scope.characters = Characters.all();
	$scope.books = Books.all();
	
	var sentences = Quiz.build();
	$scope.nbSentences = sentences.length;
	$scope.score = 0;
	$scope.currentSentenceNumber = 0;
	nextSentence();

	$scope.validate = function(choosedCharacter, choosedBook) {
		$scope.score += Quiz.computeScore($scope.sentence, choosedCharacter, choosedBook);
		nextSentence();
	};
	

	function nextSentence() {
		if ($scope.currentSentenceNumber >= sentences.length) {
			window.location = '#/quizResult/' + $scope.score;
		} else {
			$scope.currentSentenceNumber++;
			$scope.sentence = sentences[$scope.currentSentenceNumber-1];
			console.log("erase variables: DOES NOT work");
			$scope.choosedCharacter = {id: 'empty', name: 'empty'};
			delete $scope.choosedBook;
		}
	}
	
})

.controller('QuizResultController', function($scope, $stateParams) {
	$scope.score = $stateParams.score;
})

;
