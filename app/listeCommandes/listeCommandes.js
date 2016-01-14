'use strict';

angular.module('appFolio.listeCommandes', [])

.controller('listeCommandes', ['$scope',function($scope) {
    $scope.commandes = [{num:"2016_01_13_0001",nom:"boulajine",prenom:"ali",ville:"Nice",panier:[
          {Ref: "12345_1", Prix: "5.23"},
          {Ref: "12345_2", Prix: "5.23"},
          {Ref: "12345_3", Prix: "5.23"}
      ],total:"15.69"
    }];
}]);
