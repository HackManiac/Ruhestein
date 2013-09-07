/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Deadly Shot; Destroy a random enemy minion.

describe('DeadlyShot239', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Deadly Shot'
                ],
            }
        });

        g.play(g.hand(0, 'Deadly Shot'), 0, '{}');

        // TODO
    });

});
