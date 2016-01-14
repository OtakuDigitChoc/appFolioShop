'use strict';

angular.module('appFolio.commande', [])

.controller('commande', [function() {

  $http.get("http://lpdam.tokidev.fr/WS/user/list").success(function(data) {
  		$scope.commande = data;
  	});

  	$scope.commander = function() {
  		$http.get("http://lpdam.tokidev.fr/WS/post/add/" + $scope.author + "/" + $scope.title + "/" + $scope.content).success(function(data) {
  		});

  		$scope.prenom = "";
  		$scope.nom = "";
  		$scope.adresse = "";
      $scope.ville = "";
      $scope.cp = "";
      $scope.mail = "";
  	};

}]);
