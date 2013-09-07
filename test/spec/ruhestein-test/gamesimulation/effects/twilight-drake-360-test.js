/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 1/1 Twilight Drake; Battlecry: Gain +1/+1 for each card in your hand.

describe('TwilightDrake360', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Twilight Drake'
                ],
            }
        });

        g.play(g.hand(0, 'Twilight Drake'), 0, '{}');

        // TODO
    });

});
