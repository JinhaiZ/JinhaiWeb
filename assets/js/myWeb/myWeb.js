'use strict';

angular.module('myWeb', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            // route for the home page
            .state('home', {
                url: '/',
                views: {
                    'header': {
                        templateUrl : 'views/navbar/home.navbar.view.html',
                    },
                    'content': {
                        templateUrl : 'views/home.view.html',
                        // controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.view.html',
                    }
                }

            })

            // route for the aboutus page
            .state('contact', {
                url: '/contact',
                views: {
                    'header': {
                        templateUrl : 'views/navbar/contact.navbar.view.html',
                    },
                    'content': {
                        templateUrl : 'views/contact.view.html',
                        // controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.view.html',             
                    }
                }
            })
        $urlRouterProvider.otherwise('/');
    });