/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Hogger SMASH!; Deal 4 damage.

describe('HoggerSMASH443', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Hogger SMASH!'
                ],
            }
        });

        g.play(g.hand(0, 'Hogger SMASH!'), 0, '{}');

        // TODO
    });

});
