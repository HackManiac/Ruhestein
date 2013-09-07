/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (10) 12/12 Deathwing; Battlecry: Destroy all other minions and discard your hand.

describe('Deathwing474', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Deathwing'
                ],
            }
        });

        g.play(g.hand(0, 'Deathwing'), 0, '{}');

        // TODO
    });

});
