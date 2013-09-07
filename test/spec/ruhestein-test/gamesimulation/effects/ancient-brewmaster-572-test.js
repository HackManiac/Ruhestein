/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 5/4 Ancient Brewmaster; Battlecry: Return a friendly minion from the battlefield to your hand.

describe('AncientBrewmaster572', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ancient Brewmaster'
                ],
            }
        });

        g.play(g.hand(0, 'Ancient Brewmaster'), 0, '{}');

        // TODO
    });

});
