/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Innervate; Gain 2 Mana Crystals this turn only.

describe('Innervate548', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Innervate'
                ],
            }
        });

        g.test.replenishMana(6);
        expect(g.game.getMaxMana()).to.equal(6);
        expect(g.game.getCurrentMana()).to.equal(6);
        g.play(g.hand(0, 'Innervate'), 0, '{Dead}');
        expect(g.game.getMaxMana()).to.equal(8);
        expect(g.game.getCurrentMana()).to.equal(8);
        g.endTurn();
        expect(g.game.getOpponentMaxMana()).to.equal(6);
        expect(g.game.getOpponentCurrentMana()).to.equal(6);
    });

});
