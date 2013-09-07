/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 4/3 Houndmaster; Battlecry: Give a friendly Beast +2/+2 and Taunt.

describe('Houndmaster225', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Houndmaster'
                ],
            }
        });

        g.play(g.hand(0, 'Houndmaster'), 0, '{}');

        // TODO
    });

});
