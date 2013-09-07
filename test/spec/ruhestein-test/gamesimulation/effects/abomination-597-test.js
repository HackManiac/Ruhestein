/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/4 Abomination; Taunt. Deathrattle: Deal 2 damage to ALL characters.

describe('Abomination597', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Abomination'
                ],
            }
        });

        g.play(g.hand(0, 'Abomination'), 0, '{}');

        // TODO
    });

});
