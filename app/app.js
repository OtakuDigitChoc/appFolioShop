'use strict';

// Declare app level module which depends on views, and components
angular.module('appFolio', [
  'ngRoute',
  'appFolio.home',
  'appFolio.contact',
  'appFolio.commande',
  'appFolio.listeCommandes'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'home/home.html',
        controller: 'home'
      }).
      when('/contact', {
        templateUrl: 'contact/contact.html',
        controller: 'contact'
      }).
      when('/commande', {
        templateUrl: 'commande/commande.html',
        controller: 'commande'
      }).
      when('/listeCommandes', {
        templateUrl: 'listeCommandes/listeCommandes.html',
        controller: 'listeCommandes'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);
