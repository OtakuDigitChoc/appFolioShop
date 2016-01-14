'use strict';

angular.module('appFolio.listeCommandes', [])

.controller('listeCommandes', ['$scope','$http',function($scope,$http) {
    $scope.commandes = [];
    $scope.photos = [];

    $http.get("http://lpdam.tokidev.fr/WS/order/list/1").success(function(data) {
      $scope.commandes = data;
      console.log($scope.commandes);
    });
    $http.get("http://lpdam.tokidev.fr/WS/product/list").success(function(data) {
      $scope.photos = data;
      console.log($scope.photos);
    });

    $scope.getRef = function(id) {
       return $scope.photos[id-1].ref;
    }

    $scope.getPrice = function(id) {
      return $scope.photos[id-1].price;
    }
}]);
