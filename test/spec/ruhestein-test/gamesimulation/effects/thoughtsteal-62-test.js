/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Thoughtsteal; Copy 2 cards from your opponent's deck and put them into your hand.

describe('Thoughtsteal62', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Thoughtsteal'
                ],
            }
        });

        g.play(g.hand(0, 'Thoughtsteal'), 0, '{}');

        // TODO
    });

});
