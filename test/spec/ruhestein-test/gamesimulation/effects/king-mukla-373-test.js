/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 5/5 King Mukla; Battlecry: Give your opponent 2 Bananas.

describe('KingMukla373', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 King Mukla'
                ],
            }
        });

        g.play(g.hand(0, 'King Mukla'), 0, '{}');

        // TODO
    });

});
