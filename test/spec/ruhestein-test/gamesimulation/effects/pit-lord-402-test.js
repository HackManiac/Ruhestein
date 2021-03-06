/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 7/5 Pit Lord; Battlecry: Deal 7 damage to your hero.

describe('PitLord402', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Pit Lord'
                ],
            }
        });

        g.play(g.hand(0, 'Pit Lord'), 0, '{}');

        // TODO
    });

});
