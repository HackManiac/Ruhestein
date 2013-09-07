/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (8) 5/8 Cenarius; Choose One - Give your other minions +2/+2; or Summon two 2/2 Treants with Taunt.

describe('Cenarius605', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Cenarius'
                ],
            }
        });

        g.play(g.hand(0, 'Cenarius'), 0, '{}');

        // TODO
    });

});
