/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Mind Control Tech; Battlecry: If your opponent has 4 or more minions, take control of one at random.

describe('MindControlTech368', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Wisp',
                    '1 Bloodfen Raptor',
                    '2 Malygos'
                ],
                playCards: 4
            },
            player2: {
                deck: [
                    '2 Mind Control Tech'
                ],
            }
        });

        g.oBattlefield(1, '3/2 Bloodfen Raptor');
        g.gm.predictRoll(2); // 2 => oBattlefield(1)
        g.play(g.hand(0, 'Mind Control Tech'), 0, '{ZZZ}');
        g.battlefield(1, '3/2 Bloodfen Raptor');

        g.play(g.hand(0, 'Mind Control Tech'), 2, '{ZZZ}');
        g.battlefield(3, null);
    });

});
