/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Blessing of Wisdom; Choose a minion.  Whenever it attacks, draw a card.

describe('BlessingOfWisdom100', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Blessing of Wisdom'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Blessing of Wisdom'), g.battlefield(0, '1/1'), '{Dead}', '1/1');

        g.endTurn();
        g.endTurn();

        expect(g.game.getHandCardCount()).to.equal(3);
        g.play(g.battlefield(0, '1/1'), g.oHero('0/30'), '1/1', '0/29');
        expect(g.game.getHandCardCount()).to.equal(4);

        g.endTurn();
        g.endTurn();

        expect(g.game.getHandCardCount()).to.equal(5);
        g.play(g.battlefield(0, '1/1'), g.oHero('0/29'), '1/1', '0/28');
        expect(g.game.getHandCardCount()).to.equal(6);
    });

});
