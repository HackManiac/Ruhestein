/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Nightmare; Give a minion +5/+5.  At the start of your next turn, destroy it.

describe('Nightmare334', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Nightmare'
                ],
            }
        });

        g.play(g.hand(0, 'Nightmare'), 0, '{}');

        // TODO
    });

});
