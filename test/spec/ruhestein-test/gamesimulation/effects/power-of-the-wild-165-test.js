/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Power of the Wild; Choose One - Give your minions +1/+1; or Summon a 3/2 Panther.

describe('PowerOfTheWild165', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Power of the Wild'
                ],
            }
        });

        g.play(g.hand(0, 'Power of the Wild'), 0, '{}');

        // TODO
    });

});
