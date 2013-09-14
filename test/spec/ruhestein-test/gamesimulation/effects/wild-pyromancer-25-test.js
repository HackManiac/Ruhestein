/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 3/2 Wild Pyromancer; After you cast a spell, deal 1 damage to ALL minions.

describe('WildPyromancer25', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos',
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Wild Pyromancer',
                    '3 Arcane Explosion',
                ],
                playCards: 1,
                drawCards: 4
            }
        });

        g.test.silence(g.battlefield(0, '4/12 {ZZZ}'), '{Silenced,ZZZ}');
        g.play(g.hand(0, 'Wild Pyromancer'), 1, '3/2 {EffectTrigger,ZZZ}');
        g.play(g.hand(0, 'Arcane Explosion'), null);
        g.battlefield(0, '4/11');
        g.battlefield(1, '3/1');
        g.oBattlefield(0, '4/10');
        g.play(g.hand(0, 'Arcane Explosion'), null);
        g.battlefield(0, '4/10');
        g.battlefield(1, null);
        g.oBattlefield(0, '4/8');
        g.play(g.hand(0, 'Arcane Explosion'), null);
        g.battlefield(0, '4/10');
        g.battlefield(1, null);
        g.oBattlefield(0, '4/7');
    });

});
