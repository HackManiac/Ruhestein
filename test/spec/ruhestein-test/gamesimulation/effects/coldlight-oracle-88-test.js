/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/2 Coldlight Oracle; Battlecry: Each player draws 2 cards.

describe('ColdlightOracle88', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Coldlight Oracle'
                ],
            }
        });

        g.play(g.hand(0, 'Coldlight Oracle'), 0, '{}');

        // TODO
    });

});
