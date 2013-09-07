/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Eye for an Eye; Secret: When your hero takes damage, deal that much damage to the enemy hero.

describe('EyeForAnEye206', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Eye for an Eye'
                ],
            }
        });

        g.play(g.hand(0, 'Eye for an Eye'), 0, '{}');

        // TODO
    });

});
