/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Cone of Cold; Freeze a minion and the minions next to it, and deal 1 damage to them.

describe('ConeOfCold26', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Wisp',
                    '3 Malygos',
                    '1 Wisp',
                ],
                playCards: 5
            },
            player2: {
                deck: [
                    '2 Cone of Cold'
                ],
            }
        });

        g.play(g.hand(0, 'Cone of Cold'), g.oBattlefield(2, '4/12 Malygos {ZZZ}'), '{Dead}', '4/11 {Frozen,ZZZ}');
        g.oBattlefield(0, '1/1 Wisp {ZZZ}');
        g.oBattlefield(1, '4/11 Malygos {Frozen,ZZZ}');
        g.oBattlefield(3, '4/11 Malygos {Frozen,ZZZ}');
        g.oBattlefield(4, '1/1 Wisp {ZZZ}');

        g.test.playSpellPowerPlus5();
        g.play(g.hand(0, 'Cone of Cold'), g.oBattlefield(2, '4/11 Malygos {Frozen,ZZZ}'), '{Dead}', '4/5 {Frozen,ZZZ}');
        g.oBattlefield(0, '1/1 Wisp {ZZZ}');
        g.oBattlefield(1, '4/5 Malygos {Frozen,ZZZ}');
        g.oBattlefield(3, '4/5 Malygos {Frozen,ZZZ}');
        g.oBattlefield(4, '1/1 Wisp {ZZZ}');

    });

});
