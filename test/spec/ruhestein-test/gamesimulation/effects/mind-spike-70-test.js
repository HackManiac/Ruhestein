/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Mind Spike; Hero Power  Deal 2 damage.

describe('MindSpike70', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mind Spike'
                ],
            }
        });

        g.play(g.hand(0, 'Mind Spike'), 0, '{}');

        // TODO
    });

});
