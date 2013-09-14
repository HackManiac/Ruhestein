/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 5/4 Ancient Brewmaster; Battlecry: Return a friendly minion from the battlefield to your hand.

describe('AncientBrewmaster572', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Ancient Brewmaster'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Ancient Brewmaster'), g.battlefield(0, '4/12'), 1, '5/4 {ZZZ}', null, 0);
    });

});
