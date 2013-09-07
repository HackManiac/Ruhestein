/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Swipe; Deal 4 damage to an enemy and 1 damage to all other enemies.

describe('Swipe620', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Swipe'
                ],
            }
        });

        g.play(g.hand(0, 'Swipe'), 0, '{}');

        // TODO
    });

});
