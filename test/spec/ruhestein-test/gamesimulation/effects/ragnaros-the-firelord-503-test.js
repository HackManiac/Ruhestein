/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (8) 8/8 Ragnaros the Firelord; Can't Attack.  At the end of your turn, deal 8 damage to a random enemy.

describe('RagnarosTheFirelord503', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ragnaros the Firelord'
                ],
            }
        });

        g.play(g.hand(0, 'Ragnaros the Firelord'), 0, '{}');

        // TODO
    });

});
