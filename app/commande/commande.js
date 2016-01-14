'use strict';

angular.module('appFolio.commande', [])

.controller('commande', ['$scope',function($scope) {

  $http.get("http://lpdam.tokidev.fr/WS/user/list").success(function(data) {
  		$scope.commande = data;
  	});

  	$scope.commander = function() {
  		$http.get("http://lpdam.tokidev.fr/WS//customer/create/"+ $scope.prenom +"/"+$scope.nom+"/"+$scope.adresse+"/"+$scope.cp+"/"+$scope.ville+"/"+$scope.mail+"").success(function(data) {
        $scope.idUtilisateur = data
  		});

  		$scope.prenom = "";
  		$scope.nom = "";
  		$scope.adresse = "";
      $scope.ville = "";
      $scope.cp = "";
      $scope.mail = "";
  	};

}]);
