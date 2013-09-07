/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 5/4 Harrison Jones; Battlecry: Destroy your opponent's weapon and draw cards equal to its Durability.

describe('HarrisonJones602', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Harrison Jones'
                ],
            }
        });

        g.play(g.hand(0, 'Harrison Jones'), 0, '{}');

        // TODO
    });

});
