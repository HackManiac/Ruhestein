/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 1/4 Frothing Berserker; Whenever a minion takes damage, gain +1 Attack.

describe('FrothingBerserker69', function() {

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
                    '1 Frothing Berserker'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Frothing Berserker'), 1, '1/4 {EffectTrigger,ZZZ}');
        g.test.dealDamage(2, g.hero('0/30'), '0/28');
        g.battlefield(1, '1/4');
        g.test.dealDamage(2, g.battlefield(0, '4/12'), '4/10');
        g.battlefield(1, '2/4');
        g.test.dealDamage(2, g.oHero('0/30'), '0/28');
        g.battlefield(1, '2/4');
        g.test.dealDamage(2, g.oBattlefield(0, '4/12'), '4/10');
        g.battlefield(1, '3/4');
    });

});
