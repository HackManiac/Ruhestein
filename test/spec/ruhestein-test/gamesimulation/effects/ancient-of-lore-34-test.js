/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (7) 5/5 Ancient of Lore; Choose One - Draw 2 cards; or Restore 8 Health.

describe('AncientOfLore34', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Ancient of Lore'
                ],
            }
        });

        expect(g.game.getHandCardCount()).to.equal(4);
        g.playChooseOne(g.hand(0, 'Ancient of Lore'), 0, 0, '{ZZZ}');
        expect(g.game.getHandCardCount()).to.equal(5);

        g.test.replenishMana();
        
        g.test.dealDamage(10, g.hero('0/30'), '0/20');
        g.playChooseOne(g.hand(0, 'Ancient of Lore'), 1, g.hero('0/20'), 1, '{ZZZ}', '0/28');
    });

});
