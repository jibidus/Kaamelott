angular.module('kaamelott.controllers', [])

.controller('DailySentencesController', function($scope, $ionicSlideBoxDelegate, Sentences, Books) {

	var nbSentences = Sentences.size();
	var currentSentenceIndex = 0;
	
	$scope.sentences = [];
	$scope.sentences.push(Sentences.get(currentSentenceIndex++));
	$scope.sentences.push(Sentences.get(currentSentenceIndex++));
	$ionicSlideBoxDelegate.update();
	
	$scope.next = function() {
		$ionicSlideBoxDelegate.next();
	};
	$scope.previous = function() {
		$ionicSlideBoxDelegate.previous();
	};
		  
   $scope.onSlideChanged = function(newSlideIndex) {
	   console.log("Silde index updated to " + newSlideIndex);
	   $scope.slideIndex = newSlideIndex;
	   if ($scope.sentences.length <= newSlideIndex + 1){
		   appendOneSlide();
	   }
   };
   
   $scope.updateRate = function() {
	   console.debug("new rate: ");
   };
   
   $scope.maxRate = function() {
	   return [1, 2, 3, 4 ];
   };
   
   $scope.getLabelOfBook = function(index) {
	   return Books.get(index);
   };

   function appendOneSlide() {
	   if ($scope.sentences.length >= nbSentences) {
		   Sentences.shuffle();
		   currentSentenceIndex = -1;
		   // TODO will raise duplicate when inserting into sentences
	   }
	   $scope.sentences.push(Sentences.get(currentSentenceIndex++));
	   $ionicSlideBoxDelegate.update();
	   console.log("1 sentence appened");
   };
   
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
