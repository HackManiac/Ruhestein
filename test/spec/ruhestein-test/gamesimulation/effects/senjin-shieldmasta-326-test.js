/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 3/5 Sen'jin Shieldmasta; Taunt

describe('SenjinShieldmasta326', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Sen\'jin Shieldmasta'
                ],
            }
        });

        g.play(g.hand(0, 'Sen\'jin Shieldmasta'), 0, '{}');

        // TODO
    });

});
