/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 SI:7 Agent; Combo: Deal 2 damage.

describe('SI7Agent286', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 SI:7 Agent'
                ],
            }
        });

        g.play(g.hand(0, 'SI:7 Agent'), 0, '{}');

        // TODO
    });

});
