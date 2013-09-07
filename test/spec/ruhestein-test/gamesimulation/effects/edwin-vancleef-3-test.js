/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 1/1 Edwin VanCleef; Stealth. Combo: Gain +2/+2 for each other card played this turn.

describe('EdwinVanCleef3', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Edwin VanCleef'
                ],
            }
        });

        g.play(g.hand(0, 'Edwin VanCleef'), 0, '{}');

        // TODO
    });

});
