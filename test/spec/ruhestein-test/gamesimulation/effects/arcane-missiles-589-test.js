/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Arcane Missiles; Shoot 3 missiles at random enemies for 1 damage each.

describe('ArcaneMissiles589', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Arcane Missiles'
                ],
            }
        });

        g.play(g.hand(0, 'Arcane Missiles'), 0, '{}');

        // TODO
    });

});
