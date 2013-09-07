/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Tracking; Look at the top three cards of your deck. Draw one and discard the others.

describe('Tracking163', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Tracking'
                ],
            }
        });

        g.play(g.hand(0, 'Tracking'), 0, '{}');

        // TODO
    });

});
