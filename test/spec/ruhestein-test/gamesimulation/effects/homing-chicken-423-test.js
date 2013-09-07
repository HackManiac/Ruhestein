/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/1 Homing Chicken; At the start of your turn, destroy this minion and draw 3 cards.

describe('HomingChicken423', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Homing Chicken'
                ],
            }
        });

        g.play(g.hand(0, 'Homing Chicken'), 0, '{}');

        // TODO
    });

});
