/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/4 Frostwolf Warlord; Has +1/+1 for each other friendly minion on the battlefield.

describe('FrostwolfWarlord604', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Wisp'
                ],
                playCards: 1,
            },
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Frostwolf Warlord',
                    '1 Wisp'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, '4/4 Frostwolf Warlord'), 0, '5/5 {ZZZ}');
        g.play(g.hand(0, 'Wisp'));
        g.battlefield(0, '6/6');
        g.test.kill(g.battlefield(2));
        g.battlefield(0, '5/5');
        g.test.kill(g.battlefield(1));
        g.battlefield(0, '4/4');
    });

});
