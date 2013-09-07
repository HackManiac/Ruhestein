/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Bane of Doom; Deal 2 damage to a character.  If that kills it, summon a random Demon.

describe('BaneOfDoom670', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Bane of Doom'
                ],
            }
        });

        g.play(g.hand(0, 'Bane of Doom'), 0, '{}');

        // TODO
    });

});
