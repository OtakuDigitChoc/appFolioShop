'use strict';

angular.module('appFolio.home', ['ngStorage'])

.controller('panier', ['$scope','$http','$localStorage','$rootScope',function($scope,$http,$localStorage,$rootScope) {
  $scope.panier = $localStorage.panier;
console.log($scope.panier);
  $scope.totalPrice = function(){
    var total=0 ;
     for(var count=0;count<$scope.panier.length;count++){
         total += parseFloat($scope.panier[count].price);
     }
     return total;
  }

}])

.controller('home', ['$scope','$http','$localStorage','$rootScope',function($scope,$http,$localStorage,$rootScope) {

  $scope.photos = [];
  $rootScope.panier = [];
  $localStorage.panier = [];

  		$http.get("http://lpdam.tokidev.fr/WS/product/list").success(function(data) {
        $scope.photos = data;
  		});

    $scope.addItem = function(item) {
        $scope.photos.push(item);
        $scope.photos = {};
    }

    $scope.totalPrice = function(){
      var total=0 ;
       for(var count=0;count<$scope.panier.length;count++){
           total += parseFloat($scope.panier[count].price);
       }
       return total;
    }

    $scope.removeItem = function(index){
        $scope.panier.splice(index,1);
        $localStorage.panier.splice(index,1);
    }

    $scope.addPanier = function(index){
      $scope.panier.push($scope.photos[index]);
      $localStorage.panier.push($scope.photos[index]);
    }

    //galery

    // Set of Photos

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };

}]);
