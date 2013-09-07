/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Blade Flurry; Destroy your weapon and deal its damage to all enemies.

describe('BladeFlurry244', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Blade Flurry'
                ],
            }
        });

        g.play(g.hand(0, 'Blade Flurry'), 0, '{}');

        // TODO
    });

});
