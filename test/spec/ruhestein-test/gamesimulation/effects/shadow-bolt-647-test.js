/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Shadow Bolt; Deal 4 damage to a minion.

describe('ShadowBolt647', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '2 Malygos'
                ],
                playCards: 2
            },
            player2: {
                deck: [
                    '2 Shadow Bolt'
                ],
            }
        });

        g.play(g.hand(0, 'Shadow Bolt'), g.oBattlefield(0, '4/12'), '{Dead}', '4/8');
        g.test.playSpellPowerPlus5();
        g.play(g.hand(0, 'Shadow Bolt'), g.oBattlefield(1, '4/12'), '{Dead}', '4/3');
    });

});
