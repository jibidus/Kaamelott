angular.module('starter.controllers', [])

.controller('CitationDuJourController', function($scope, Citations, $ionicNavBarDelegate, $location, localStorageService) {
	var citation = Citations.getRandom();
	$scope.citation = citation;
	localStorageService.add('lastCitation',citation);
	
	$scope.goBack = function() {
	    $ionicNavBarDelegate.back();
	  };
	$scope.goNextCitationDuJour = function() {
		$location.path('/citationDuJour');
	}
})

;