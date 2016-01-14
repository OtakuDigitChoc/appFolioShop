'use strict';

angular.module('appFolio.commande', ['ngStorage'])

.controller('commande', ['$scope','$localStorage','$http',function($scope,$localStorage,$http) {

    var articles = $localStorage.panier;
    $scope.id = [];
    var id = 0;
    var listeProduit = "";
    var id = "";

  	$scope.commander = function() {
  		$http.get("http://lpdam.tokidev.fr/WS/customer/create/"+ $scope.prenom +"/"+$scope.nom+"/"+$scope.adresse+"/"+$scope.cp+"/"+$scope.ville+"/"+$scope.mail+"").success(function(data) {
        $scope.id = data;
        id = $scope.id.message;
        $http.get("http://lpdam.tokidev.fr/WS/order/create/1/"+id+"/"+listeProduit+"").success(function(data) {
          $scope.retour = data;
    		});
        console.log(id);
  		});

  		$scope.prenom = "";
  		$scope.nom = "";
  		$scope.adresse = "";
      $scope.ville = "";
      $scope.cp = "";
      $scope.mail = "";


      for(var count=0;count< articles.length;count++){
          listeProduit += articles[count].ref;
          if (count+1 < articles.length) listeProduit+= "|";
      }
      console.log(id);

  	};
}]);
