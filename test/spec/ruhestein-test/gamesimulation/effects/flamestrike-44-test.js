/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (7) Flamestrike; Deal 4 damage to all enemy minions.

describe('Flamestrike44', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Flamestrike'
                ],
            }
        });

        g.play(g.hand(0, 'Flamestrike'), 0, '{}');

        // TODO
    });

});
