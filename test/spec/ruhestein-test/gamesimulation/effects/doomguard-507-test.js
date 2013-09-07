/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 5/7 Doomguard; Charge. Battlecry: Discard two random cards.

describe('Doomguard507', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Doomguard'
                ],
            }
        });

        g.play(g.hand(0, 'Doomguard'), 0, '{}');

        // TODO
    });

});
