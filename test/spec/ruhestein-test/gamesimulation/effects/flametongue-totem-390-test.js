/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 0/3 Flametongue Totem; Adjacent minions have +2 Attack.

describe('FlametongueTotem390', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '4 Wisp',
                    '1 Flametongue Totem'
                ],
                playCards: 4,
                drawCards: 1
            }
        });

        g.battlefield(0, '1/1');
        g.battlefield(1, '1/1');
        g.battlefield(2, '1/1');
        g.battlefield(3, '1/1');

        g.play(g.hand(0, 'Flametongue Totem'), 2, '{ZZZ}');

        g.battlefield(0, '1/1');
        g.battlefield(1, '3/1');
        g.battlefield(2, '0/3');
        g.battlefield(3, '3/1');
        g.battlefield(4, '1/1');
    });

});
