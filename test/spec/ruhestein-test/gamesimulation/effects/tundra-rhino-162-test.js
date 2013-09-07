/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 2/5 Tundra Rhino; Your Beasts have Charge.

describe('TundraRhino162', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Tundra Rhino'
                ],
            }
        });

        g.play(g.hand(0, 'Tundra Rhino'), 0, '{}');

        // TODO
    });

});
