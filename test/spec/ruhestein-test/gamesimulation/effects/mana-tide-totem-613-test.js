/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 0/3 Mana Tide Totem; At the end of your turn, draw a card.

describe('ManaTideTotem613', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mana Tide Totem'
                ],
            }
        });

        g.play(g.hand(0, 'Mana Tide Totem'), 0, '{}');

        // TODO
    });

});
