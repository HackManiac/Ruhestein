/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (9) 8/8 Alexstrasza; Battlecry: Set a hero's remaining Health to 15.

describe('Alexstrasza303', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Alexstrasza'
                ],
            }
        });

        g.play(g.hand(0, 'Alexstrasza'), 0, '{}');

        // TODO
    });

});
