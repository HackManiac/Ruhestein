/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Headcrack; Deal 2 damage to the enemy hero. Combo: Return this to your hand next turn.

describe('Headcrack135', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Headcrack'
                ],
            }
        });

        g.play(g.hand(0, 'Headcrack'), 0, '{}');

        // TODO
    });

});
