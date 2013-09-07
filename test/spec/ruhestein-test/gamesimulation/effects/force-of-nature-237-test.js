/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (6) Force of Nature; Summon three 2/2 Treants with Charge that die at the end of the turn.

describe('ForceOfNature237', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Force of Nature'
                ],
            }
        });

        g.play(g.hand(0, 'Force of Nature'), 0, '{}');

        // TODO
    });

});
