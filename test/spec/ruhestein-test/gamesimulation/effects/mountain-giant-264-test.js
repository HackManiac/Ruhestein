/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (12) 8/8 Mountain Giant; Costs (1) less for each other card in your hand.

describe('MountainGiant264', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mountain Giant'
                ],
            }
        });

        g.play(g.hand(0, 'Mountain Giant'), 0, '{}');

        // TODO
    });

});
