/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Nourish; Gain 2 Mana Crystals.

describe('Nourish58', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Nourish'
                ],
            }
        });

        g.play(g.hand(0, 'Nourish'), 0, '{}');

        // TODO
    });

});
