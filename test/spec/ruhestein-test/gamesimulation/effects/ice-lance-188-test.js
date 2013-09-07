/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Ice Lance; Freeze a character. If it was already Frozen, deal 4 damage instead.

describe('IceLance188', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ice Lance'
                ],
            }
        });

        g.play(g.hand(0, 'Ice Lance'), 0, '{}');

        // TODO
    });

});
