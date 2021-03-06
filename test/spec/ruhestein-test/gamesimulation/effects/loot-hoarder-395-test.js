/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/1 Loot Hoarder; Deathrattle: Draw a card.

describe('LootHoarder395', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Loot Hoarder'
                ],
            }
        });

        g.play(g.hand(0, 'Loot Hoarder'), 0, '{Deathrattle,ZZZ}');
        expect(g.game.getHandCardCount()).to.equal(3);
        g.test.kill(g.battlefield(0, '2/1 Loot Hoarder'));
        expect(g.game.getHandCardCount()).to.equal(4);
    });

});
