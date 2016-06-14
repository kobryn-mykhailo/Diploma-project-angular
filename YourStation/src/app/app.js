'use strict'

var ysApp = angular.module('ysApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'backand', 'angularModalService']);

//===============

// everything for animatet slider on the mainpage

//===============
ysApp.controller('slideCtrl', function ($scope, $timeout, QueueService) {

});

ysApp.factory('QueueService', function($rootScope){

});

ysApp.animation('.slide-left-animation', function ($window) {

});

ysApp.animation('.slide-down-animation', function ($window) {

});

ysApp.animation('.fade-in-animation', function ($window) {

});

ysApp.directive('bgImage', function ($window, $timeout) {

});

ysApp.config(function (BackandProvider) {
    BackandProvider.setAppName('yourstation');
    BackandProvider.setSignUpToken('f754b7d4-7b70-434d-87fb-7028c7142117');
    BackandProvider.setAnonymousToken('41e85185-267c-4043-b6ad-a596c4ecadd8');
});

//==============
//
// read data from database
//
//==============

dataService.js
function dataService($http, Backand) {
var vm = this;
//get the object name and optional parameters
	vm.getList = function(name, sort, filter) {
	  return $http({
	    method: 'GET',
	    url: Backand.getApiUrl() + '/1/objects/' + name,
	    params: {
	      pageSize: 20,
	      pageNumber: 1,
	      filter: filter || '',
	      sort: sort || ''
	    }
	  });
	}
}
//Update Angular configuration section
  // ysApp.config(function (BackandProvider) {
  //   BackandProvider.runSocket(true); //enable the web sockets that makes the database realtime
  // })