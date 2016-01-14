'use strict';

angular.module('appFolio.home', [])

.controller('home', ['$scope',function($scope) {

  $scope.items = [
        {Ref: "12345_1", Prix: "5.23"},
        {Ref: "12345_2", Prix: "5.23"},
        {Ref: "12345_3", Prix: "5.23"}
    ];

    $scope.addItem = function(item) {
        $scope.items.push(item);
        $scope.item = {};
    }

    $scope.totalPrice = function(){
      var total=0 ;
       for(var count=0;count<$scope.items.length;count++){
           total += parseFloat($scope.items[count].Prix);
       }
       return total;
    }

    $scope.removeItem = function(index){
        $scope.items.splice(index,1);
    }

    //galery

    // Set of Photos
    $scope.photos = [
        {src: 'img/photos/photo_1.jpg', desc: 'Image 01'},
        {src: 'img/photos/photo_2.jpg', desc: 'Image 02'},
        {src: 'img/photos/photo_3.jpg', desc: 'Image 03'},
        {src: 'img/photos/photo_4.jpg', desc: 'Image 04'},
        {src: 'img/photos/photo_5.jpg', desc: 'Image 05'},
        {src: 'img/photos/photo_6.jpg', desc: 'Image 06'}
    ];

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
