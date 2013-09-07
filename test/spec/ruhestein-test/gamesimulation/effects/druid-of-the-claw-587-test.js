/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/4 Druid of the Claw; Choose One - Charge; or +2 Health and Taunt.

describe('DruidOfTheClaw587', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Druid of the Claw'
                ],
            }
        });

        g.play(g.hand(0, 'Druid of the Claw'), 0, '{}');

        // TODO
    });

});