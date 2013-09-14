/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/3 Mana Addict; Whenever you cast a spell, gain +2 Attack this turn.

describe('ManaAddict67', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mana Addict',
                    '3 Arcane Explosion'
                ],
            }
        });

        g.play(g.hand(0, 'Mana Addict'), 0, '1/3 {EffectTrigger,ZZZ}');
        g.play(g.heroPower('Fireblast'), g.oHero('0/30'), null, '0/29');
        g.battlefield(0, '1/3');
        g.play(g.hand(0, 'Arcane Explosion'), null);
        g.battlefield(0, '3/3');
        g.play(g.hand(0, 'Arcane Explosion'), null);
        g.battlefield(0, '5/3');
        g.endTurn();
        g.oBattlefield(0, '1/3');
        g.endTurn();
        g.battlefield(0, '1/3');
        g.play(g.hand(0, 'Arcane Explosion'), null);
        g.battlefield(0, '3/3');
    });

});
