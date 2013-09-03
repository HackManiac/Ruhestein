(function() {
    'use strict';

    window.mocha.setup('bdd');

    window.expect = window.chai.expect;

    window._$jscoverage = {};


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
            bootstrapTransition: '../bower_components/sass-bootstrap/js/transition'
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
            }
        }
    });

    require(['spec-test'], function () {
        var runner = window.mocha.run();

        if (!window.PHANTOMJS) {
            return;
        }

        runner.on('test', function(test) {
            sendMessage('testStart', test.title);
        });

        runner.on('test end', function(test) {
            sendMessage('testDone', test.title, test.state);
        });

        runner.on('suite', function(suite) {
            sendMessage('suiteStart', suite.title);
        });

        runner.on('suite end', function(suite) {
            if (suite.root) {
                return;
            }
            sendMessage('suiteDone', suite.title);
        });

        runner.on('fail', function(test, err) {
            sendMessage('testFail', test.title, err);
        });

        runner.on('end', function() {
            var output = {
                failed: this.failures,
                passed: this.total - this.failures,
                total: this.total
            };

            sendMessage('done', output.failed, output.passed, output.total);
        });

        function sendMessage() {
            var args = [].slice.call(arguments);
            window.alert(JSON.stringify(args));
        }
    });
})();
