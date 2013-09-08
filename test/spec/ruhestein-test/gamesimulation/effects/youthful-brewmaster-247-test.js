/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 3/2 Youthful Brewmaster; Battlecry: Return a friendly minion from the battlefield to your hand.

describe('YouthfulBrewmaster247', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Youthful Brewmaster'
                ],
                playCards: 1
            }
        });

        g.test.dealDamage(11, g.battlefield(0, '4/12'), '4/1');
        g.test.silence(g.battlefield(0, '4/1 {ZZZ}'), '4/1 {Silenced,ZZZ}');

        g.play(g.hand(0, 'Youthful Brewmaster'), g.battlefield(0, '4/1'), 0, '{ZZZ}', '4/12 {Silenced}');
        g.battlefield(0, 'Youthful Brewmaster');
        g.battlefield(1, null);

        g.test.replenishMana(10);
        g.play(g.hand(2, '4/12 Malygos {Silenced}'), 1, '4/12 {Silenced,ZZZ}');
        expect(g.game.getSpellPower()).to.equal(0);
    });

});
