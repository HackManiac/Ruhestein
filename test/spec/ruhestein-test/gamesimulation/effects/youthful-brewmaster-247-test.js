/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 3/2 Youthful Brewmaster; Battlecry: Return a friendly minion from the battlefield to your hand.

describe('YouthfulBrewmaster247', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Youthful Brewmaster'
                ],
            }
        });

        g.play(g.hand(0, 'Youthful Brewmaster'), 0, '{}');

        // TODO
    });

});
