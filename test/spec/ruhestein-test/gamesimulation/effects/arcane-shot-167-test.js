/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Arcane Shot; Deal 2 damage.

describe('ArcaneShot167', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Arcane Shot'
                ],
            }
        });

        g.play(g.hand(0, 'Arcane Shot'), 0, '{}');

        // TODO
    });

});
