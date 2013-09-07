/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Nourish; Choose One - Gain 2 Mana Crystals; or Draw 3 cards.

describe('Nourish120', function() {

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
