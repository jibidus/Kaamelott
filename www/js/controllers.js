angular.module('starter.controllers', [])

.controller('CitationDuJourController', function($scope, $stateParams, Citations, $ionicNavBarDelegate, $location) {

	var citationId = $stateParams.citationId;
	var citation;
	if ( citationId ) {
		citation = Citations.get(citationId);
	} else {
		citation = Citations.next();
	}
	$scope.citation = citation;
	
	// Actions
	$scope.goBack = function() {
	    $ionicNavBarDelegate.back();
	  };
	  
	$scope.goNextCitationDuJour = function() {
		$location.path('/citationDuJour/' + Citations.next().id);
	};
})
;
