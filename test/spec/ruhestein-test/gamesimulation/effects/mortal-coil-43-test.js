/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Mortal Coil; Deal 1 damage to a minion. If that kills it, draw a card.

describe('MortalCoil43', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mortal Coil'
                ],
            }
        });

        g.play(g.hand(0, 'Mortal Coil'), 0, '{}');

        // TODO
    });

});
