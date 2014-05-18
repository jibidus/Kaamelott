angular.module('kaamelott.controllers', [])

.directive('aRate', function() {
	return {
		restrict: 'E',
		templateUrl: 'rate.html'
	};
});