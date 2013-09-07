/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) The Coin; Gain 1 Mana Crystal this turn only.

describe('TheCoin141', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 The Coin'
                ],
            }
        });

        g.play(g.hand(0, 'The Coin'), 0, '{}');

        // TODO
    });

});
