angular.module('starter.controllers', [])

.controller('CitationDuJourController', function($scope, $ionicSlideBoxDelegate, Citations) {

	$scope.citations = [];
	$scope.citations.push(Citations.get(0));
	$scope.citations.push(Citations.get(1));
	$scope.citations.push(Citations.get(2));
	$ionicSlideBoxDelegate.update();
	
	$scope.next = function() {
		$ionicSlideBoxDelegate.next();
	};
	$scope.previous = function() {
		$ionicSlideBoxDelegate.previous();
	};
		  
   $scope.onSlideChanged = function(index) {
	   console.log("on slide changed !");
	   $scope.slideIndex = index;
   };
})
;
