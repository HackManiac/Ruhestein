/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Elven Archer; Battlecry: Deal 1 damage.

describe('ElvenArcher356', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Elven Archer'
                ],
            }
        });

        g.play(g.hand(0, 'Elven Archer'), 0, '{}');

        // TODO
    });

});
