/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/2 Raid Leader; Your other minions have +1 Attack.

describe('RaidLeader502', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Wisp',
                    '1 Raid Leader'
                ],
                playCards: 2
            }
        });

        g.battlefield(0, '1/1');
        g.battlefield(1, '1/1');
        g.play(g.hand(0, '2/2 Raid Leader'), 2, '2/2 {ZZZ}');
        g.battlefield(0, '2/1');
        g.battlefield(1, '2/1');
        g.test.silence(g.battlefield(2, '2/2'), '2/2 {Silenced,ZZZ}');
        g.battlefield(0, '1/1');
        g.battlefield(1, '1/1');
    });

});
