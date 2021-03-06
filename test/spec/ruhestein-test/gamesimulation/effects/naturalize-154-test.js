/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Naturalize; Destroy a minion. Your opponent draws 2 cards.

describe('Naturalize154', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Naturalize'
                ],
            }
        });

        g.play(g.hand(0, 'Naturalize'), 0, '{}');

        // TODO
    });

});
