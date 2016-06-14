'use strict'

ysApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'app/components/mainpage/mainpage.tpl.html',
            controller : 'slideCtrl'
            
        })

        // route for the services desctiption page
        .when('/services', {
            templateUrl : 'app/components/providedServices/providedServices.tpl.html',
            controller  : ''
        })

        // route for the contact page
        .when('/contacts', {
            templateUrl : 'app/components/contacts/contacts.tpl.html',
            controller  : 'contactCtrl'
        })

        // route for the projects-page
        .when('/projects', {
            templateUrl : 'app/components/projects/projects.tpl.html',
            controller  : 'portfolio'
        });
});