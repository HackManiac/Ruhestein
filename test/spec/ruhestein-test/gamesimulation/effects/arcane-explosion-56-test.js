/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Arcane Explosion; Deal 1 damage to all enemy minions.

describe('ArcaneExplosion56', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Wisp',
                    '1 Malygos'
                ],
                playCards: 2
            },
            player2: {
                deck: [
                    '2 Arcane Explosion'
                ],
            }
        });

        g.oBattlefield(0, '1/1');
        g.oBattlefield(1, '4/12');
        g.play(g.hand(0, 'Arcane Explosion'), null, '{Dead}');
        g.oBattlefield(0, '4/11');

        g.test.playSpellPowerPlus5();

        g.play(g.hand(0, 'Arcane Explosion'), null, '{Dead}');
        g.oBattlefield(0, '4/5');
    });

});
