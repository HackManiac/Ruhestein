/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/6 Druid of the Claw; Taunt

describe('DruidOfTheClaw45', function() {

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
