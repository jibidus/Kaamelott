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

});
