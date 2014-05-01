angular.module('kaamelott.controllers', [])

.controller('DailySentencesController', function($scope, $ionicSlideBoxDelegate, Sentences) {

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

   function appendOneSlide(){
	   if ($scope.sentences.length >= nbSentences) {
		   Sentences.shuffle();
		   currentSentenceIndex = -1;
		   // TODO will raise duplicate when inserting into sentences
	   }
	   $scope.sentences.push(Sentences.get(currentSentenceIndex++));
	   $ionicSlideBoxDelegate.update();
	   console.log("1 sentence appened");
   }
   
});
