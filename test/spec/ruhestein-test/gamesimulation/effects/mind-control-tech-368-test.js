/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Mind Control Tech; Battlecry: If your opponent has 4 or more minions, take control of one at random.

describe('MindControlTech368', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mind Control Tech'
                ],
            }
        });

        g.play(g.hand(0, 'Mind Control Tech'), 0, '{}');

        // TODO
    });

});
