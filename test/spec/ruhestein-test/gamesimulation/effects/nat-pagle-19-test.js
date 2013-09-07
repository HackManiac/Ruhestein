/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 0/4 Nat Pagle; At the end of your turn, you have a 50% chance to draw a card.

describe('NatPagle19', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Nat Pagle'
                ],
            }
        });

        g.play(g.hand(0, 'Nat Pagle'), 0, '{}');

        // TODO
    });

});
