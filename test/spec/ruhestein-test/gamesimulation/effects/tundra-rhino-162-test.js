/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 2/5 Tundra Rhino; Your Beasts have Charge.

describe('TundraRhino162', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Bloodfen Raptor',
                    '1 Wisp',
                    '1 Tundra Rhino',
                    '1 Bloodfen Raptor',
                ],
                playCards: 2
            }
        });

        g.battlefield(0, '3/2 Bloodfen Raptor {ZZZ}');
        g.battlefield(1, '1/1 Wisp {ZZZ}');
        g.play(g.hand(0, 'Tundra Rhino'), 2, '{Charge}');
        g.battlefield(0, '3/2 Bloodfen Raptor {Charge}');
        g.battlefield(1, '1/1 Wisp {ZZZ}');
        g.play(g.hand(0, '3/2 Bloodfen Raptor'), 3, '{Charge}');
    });

});
