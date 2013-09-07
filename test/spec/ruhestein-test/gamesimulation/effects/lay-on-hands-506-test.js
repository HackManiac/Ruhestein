/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (8) Lay on Hands; Restore #8 Health. Draw 3 cards.

describe('LayOnHands506', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Lay on Hands'
                ],
            }
        });

        g.play(g.hand(0, 'Lay on Hands'), 0, '{}');

        // TODO
    });

});
