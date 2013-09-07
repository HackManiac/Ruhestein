/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Deadly Poison; Give your weapon +2 Attack.

describe('DeadlyPoison87', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Deadly Poison'
                ],
            }
        });

        g.play(g.hand(0, 'Deadly Poison'), 0, '{}');

        // TODO
    });

});
