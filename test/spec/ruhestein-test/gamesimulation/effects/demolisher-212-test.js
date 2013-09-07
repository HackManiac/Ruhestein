/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 1/4 Demolisher; At the start of your turn, deal 2 damage to a random enemy.

describe('Demolisher212', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Demolisher'
                ],
            }
        });

        g.play(g.hand(0, 'Demolisher'), 0, '{}');

        // TODO
    });

});
