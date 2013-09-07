/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Wild Growth; Gain an empty Mana Crystal.

describe('WildGrowth282', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wild Growth'
                ],
            }
        });

        g.play(g.hand(0, 'Wild Growth'), 0, '{}');

        // TODO
    });

});
