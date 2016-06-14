(function() {


	'use strict'

	ysApp.controller('navCtrl', function($scope, $location) {
		$scope.isActive = function (viewLocation) {
	       return viewLocation === $location.path();
	   }
	});
})();