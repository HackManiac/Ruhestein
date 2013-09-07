/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (7) 7/5 Baron Geddon; At the end of your turn, deal 2 damage to ALL other characters.

describe('BaronGeddon539', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Baron Geddon'
                ],
            }
        });

        g.play(g.hand(0, 'Baron Geddon'), 0, '{}');

        // TODO
    });

});
