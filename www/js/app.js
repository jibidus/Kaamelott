// Kaamelott App

angular.module('kaamelott', ['ionic', 'kaamelott.controllers', 'kaamelott.services', 'LocalStorageModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('dailySentences', {
      url: '/dailySentences',
      templateUrl: 'templates/dailySentences.html',
      controller : 'DailySentencesController'
    });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dailySentences');

})

/*
.directive('ngRepeatTimes', function ($compile) {
    return {
    	restrict: 'E',
    	replace: true,
    	terminal: true, // Mandatory to increase compiling priority
        priority: 1000, // Mandatory to increase compiling priority
        scope: { times: '=' },
        compile: function (element, attrs, scope) {
            var times = scope.times || 0;
            var index = 0;
            var content = element.html();
            element.html("");
            while (index < times) {
            	element.append(content);
            	index++;
            }
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {  },
                post: function postLink(scope, iElement, iAttrs, controller) {  
                  $compile(iElement)(scope);
                }
            };
        }
    };
})
*/
;
