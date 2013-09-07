/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Claw; Give your hero +2 Attack this turn and 2 Armor.

describe('Claw532', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Claw'
                ],
            }
        });

        g.play(g.hand(0, 'Claw'), 0, '{}');

        // TODO
    });

});
