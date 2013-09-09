/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/3 Warsong Commander; Your other minions have Charge.

describe('WarsongCommander193', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Warsong Commander',
                    '1 Wisp'
                ],
                playCards: 1
            }
        });

        g.battlefield(0, '1/1 Wisp {ZZZ}');
        g.play(g.hand(0, 'Warsong Commander'), 1, '{ZZZ}');
        g.battlefield(0, '1/1 Wisp {Charge}');
        g.play(g.hand(0, '1/1 Wisp'), 2, '{Charge}');
    });

});
