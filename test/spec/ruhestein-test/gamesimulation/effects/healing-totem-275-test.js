/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/2 Healing Totem; At the end of your turn, restore 1 Health to all friendly characters.

describe('HealingTotem275', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'Shaman',
                deck: [
                    '1 Malygos'
                ],
                playCards: 1
            }
        });

        g.test.dealDamage(3, g.hero('0/30'));
        g.test.dealDamage(3, g.battlefield(0, '4/12'));
        g.gm.predictRoll(1);
        g.play(g.heroPower('Totemic Call'), null);
        g.battlefield(1, '0/2 Healing Totem {EffectTrigger,ZZZ}');
        g.endTurn();
        g.oHero('0/28');
        g.oBattlefield(0, '4/10');
        g.endTurn();
        g.hero('0/28');
        g.battlefield(0, '4/10');
        g.endTurn();
        g.oHero('0/29');
        g.oBattlefield(0, '4/11');
    });

});
