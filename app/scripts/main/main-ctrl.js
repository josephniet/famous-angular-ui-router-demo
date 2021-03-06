'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Timer = $famous['famous/utilities/Timer'];

    $scope.spinner = {
      speed: 55
    };
    $scope.rotateY = new Transitionable(0);
    $scope.translateY = new Transitionable(0);

    //run function on every tick of the Famo.us engine
    Timer.every(function(){
      var adjustedSpeed = parseFloat($scope.spinner.speed) / 1200;
      $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
    }, 1);

    $scope.enter = function($done){
      $scope.translateY.set(-400);
      $scope.translateY.set(0, {duration: 1000, curve: 'easeOut'}, $done);
    }

    $scope.leave = function($done){
      $scope.translateY.set(1000, {duration: 1000, curve: 'easeOut'}, $done);
    }

  });
