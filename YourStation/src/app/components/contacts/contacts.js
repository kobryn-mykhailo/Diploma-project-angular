'use strict'

ysApp.controller('contactCtrl', function ($scope, $window, $http, ModalService) {
    $window.map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 49.84519211,
            lng: 24.03141797
        },
        zoom: 16

    });
    $scope.names = [
        'бізнес-аналіз', 
        'конкретна інформація', 
        'маркетингове дослідження', 
        'потрібне SEO-просування', 
        'потрібен сайт'
    ];
//================
//
//to sent contact-form
//
//================

	    // Variable to hold request
	var request;

	// Bind to the submit event of our form
	$("#query-form").submit(function(event){

	    // Abort any pending request
	    if (request) {
	        request.abort();
	    }
	    // setup some local variables
	    var $form = $(this);

	    // Let's select and cache all the fields
	    var $inputs = $form.find("input, select, button, textarea");

	    // Serialize the data in the form
	    var serializedData = $form.serialize();

	    // Let's disable the inputs for the duration of the Ajax request.
	    // Note: we disable elements AFTER the form data has been serialized.
	    // Disabled form elements will not be serialized.
	    $inputs.prop("disabled", true);

	    // Fire off the request to /form.php
	    request = $.ajax({
	        url: "https://script.google.com/macros/s/AKfycbyekFZsnY00vOoRAydrUJQGmvWo_embttoslBlEr33HV36UZIR2/exec",
	        type: "post",
	        data: serializedData
	    });

	    // Callback handler that will be called on success
	    request.done(function (response, textStatus, jqXHR){
	        // Log a message to the console
	        console.log("Form's been sent to YourStation");
	        console.log(response);
	        console.log(textStatus);
	        console.log(jqXHR);
	    });

	    // Callback handler that will be called on failure
	    request.fail(function (jqXHR, textStatus, errorThrown){
	        // Log the error to the console
	        console.error(
	            "The following error occurred: "+
	            textStatus, errorThrown
	        );
	    });

	    // Callback handler that will be called regardless
	    // if the request failed or succeeded
	    request.always(function () {
	        // Reenable the inputs
	        $inputs.prop("disabled", false);
	    });

	    // Prevent default posting of form
	    event.preventDefault();

	    //clear form
	    $scope.email = '';
	    $scope.selectedName = '';
	    $scope.namen = '';
	    $scope.companies = '';
	    $scope.phoneNumber = '';
	    $scope.messages = '';
	});

	$scope.show = function() {
        ModalService.showModal({
            templateUrl: 'modal.html',
            controller: "ModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });

    };

	//clear form after submit 


});

// https://script.google.com/macros/s/AKfycbyekFZsnY00vOoRAydrUJQGmvWo_embttoslBlEr33HV36UZIR2/exec

// ysApp.controller('postController', function($scope, $http) {
//       // create a blank object to handle form data.
//         $scope.user = {};
//       // calling our submit function.
//         $scope.submitForm = function() {
//         // Posting data to php file
//         $http({
//           method  : 'POST',
//           url     : 'https://script.google.com/macros/s/AKfycbyekFZsnY00vOoRAydrUJQGmvWo_embttoslBlEr33HV36UZIR2/exec',
//           data    : $scope.user, //forms user object
//           headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
//          })
//           .success(function(data) {
//             if (data.errors) {
//               // Showing errors.
//               $scope.errorName = data.errors.name;
//               $scope.errorUserName = data.errors.username;
//               $scope.errorEmail = data.errors.email;
//             } else {
//               $scope.message = data.message;
//             }
//           });
//         };
//     });

ysApp.controller('ModalController', function($scope, close) {
  
 $scope.close = function(result) {
 	close(result, 500); // close, but give 500ms for bootstrap to animate
 };

});