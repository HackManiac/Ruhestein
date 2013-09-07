/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 10/6 The Beast; Deathrattle: Summon a 3/3 Finkle Einhorn for your opponent.

describe('TheBeast179', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 The Beast'
                ],
            }
        });

        g.play(g.hand(0, 'The Beast'), 0, '{}');

        // TODO
    });

});
