angular.module('kaamelott.controllers', [])

.controller('DailySentencesController', function($scope, $ionicSlideBoxDelegate, Sentences, Books) {

	// This means only 5 slides max (2 previous, 2 next, and the one is shown) will be in the DOM. 
	var bufferedSlides = 2;
	
	$scope.sentences = Sentences.all();
	$scope.currentSlide = 0;
	
	$scope.next = function() {
		$ionicSlideBoxDelegate.next();
	};
	$scope.previous = function() {
		$ionicSlideBoxDelegate.previous();
	};
	
	$scope.onSlideChanged = function(newSlideIndex) {
	   $scope.currentSlide = $ionicSlideBoxDelegate.currentIndex();
   };
   
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
