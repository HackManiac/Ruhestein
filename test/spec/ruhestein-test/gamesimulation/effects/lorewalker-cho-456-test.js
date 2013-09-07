/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/4 Lorewalker Cho; Whenever a player casts a spell, put a copy into the other player’s hand.

describe('LorewalkerCho456', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Lorewalker Cho'
                ],
            }
        });

        g.play(g.hand(0, 'Lorewalker Cho'), 0, '{}');

        // TODO
    });

});
