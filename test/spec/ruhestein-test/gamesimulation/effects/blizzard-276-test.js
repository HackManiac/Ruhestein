/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Blizzard; Deal 2 damage to all enemy minions and Freeze them.

describe('Blizzard276', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Blizzard'
                ],
            }
        });

        g.play(g.hand(0, 'Blizzard'), 0, '{}');

        // TODO
    });

});
