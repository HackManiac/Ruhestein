/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Explosive Shot; Deal 5 damage to a minion and 2 damage to adjacent ones.

describe('ExplosiveShot114', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Explosive Shot'
                ],
            }
        });

        g.play(g.hand(0, 'Explosive Shot'), 0, '{}');

        // TODO
    });

});
