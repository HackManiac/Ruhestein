/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Sinister Strike; Deal 3 damage to the enemy hero.

describe('SinisterStrike205', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Sinister Strike'
                ],
            }
        });

        g.play(g.hand(0, 'Sinister Strike'), 0, '{}');

        // TODO
    });

});
