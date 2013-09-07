/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Whirlwind; Deal 1 damage to ALL minions.

describe('Whirlwind161', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Whirlwind'
                ],
            }
        });

        g.play(g.hand(0, 'Whirlwind'), 0, '{}');

        // TODO
    });

});
