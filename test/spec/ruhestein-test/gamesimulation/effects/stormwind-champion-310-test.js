/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (7) 6/6 Stormwind Champion; Your other minions have +1/+1.

describe('StormwindChampion310', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Wisp',
                    '1 Stormwind Champion'
                ],
                playCards: 2
            }
        });

        g.battlefield(0, '1/1');
        g.battlefield(1, '1/1');
        g.play(g.hand(0, 'Stormwind Champion'), 2, '6/6 {ZZZ}');
        g.battlefield(0, '2/2');
        g.battlefield(1, '2/2');
    });

});
