/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Shadow Madness; Gain control of an enemy minion with 3 or less Attack until end of turn.

describe('ShadowMadness442', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shadow Madness'
                ],
            }
        });

        g.play(g.hand(0, 'Shadow Madness'), 0, '{}');

        // TODO
    });

});
