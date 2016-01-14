'use strict';

angular.module('appFolio.listeCommandes', [])

.controller('listeCommandes', ['$scope',function($scope) {
    $scope.commandes = [];

    $scope.commander = function() {
  		$http.get("http://lpdam.tokidev.fr/WS//customer/create/"+ $scope.prenom +"/"+$scope.nom+"/"+$scope.adresse+"/"+$scope.cp+"/"+$scope.ville+"/"+$scope.mail+"").success(function(data) {
        $scope.commandes = data;
  		});
    }
}]);
