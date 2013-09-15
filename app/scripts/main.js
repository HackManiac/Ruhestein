require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrapAffix: '../bower_components/sass-bootstrap/js/affix',
        bootstrapAlert: '../bower_components/sass-bootstrap/js/alert',
        bootstrapButton: '../bower_components/sass-bootstrap/js/button',
        bootstrapCarousel: '../bower_components/sass-bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/sass-bootstrap/js/collapse',
        bootstrapPopover: '../bower_components/sass-bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/sass-bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/sass-bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/sass-bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/sass-bootstrap/js/transition',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/requirejs-text/text',
        chaplin: '../bower_components/chaplin/chaplin'
    },
    shim: {
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery']
        },
        bootstrapCollapse: {
            deps: ['jquery']
        },
        bootstrapPopover: {
            deps: ['jquery']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery']
        },
        bootstrapTooltip: {
            deps: ['jquery']
        },
        bootstrapTransition: {
            deps: ['jquery']
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require(['underscore', 'chaplin', 'application', 'routes'], function(_, Chaplin, Application, routes) {
    'use strict';
    
    new Application({
        routes: routes,
        controllerSuffix: '-controller',
        pushState: false
    });

    var mediator = Chaplin.mediator;

    var socket = io.connect(window.location.protocol + '//' + window.location.host);

    var messageType = 'ruhesteinMessage';

    socket.on(messageType, function(rawMessage, callback) {
        var message = JSON.parse(rawMessage);
        console.log(message);
        
        var wrappedCallback;
        if (callback) {
            wrappedCallback = function(result) {
                var rawResult = JSON.stringify(result);
                callback(rawResult);
            };
        }

        mediator.publish('io:receivedMessage', message, wrappedCallback);
    });

    mediator.subscribe('!io:sendMessage', function(message, callback) {
        var rawMessage = JSON.stringify(message);

        var wrappedCallback = function(rawResult) {
            var result = JSON.parse(rawResult);
            callback(result);
        };

        socket.emit(messageType, rawMessage, wrappedCallback);
    });
});
