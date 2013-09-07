/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) The Coin; Gain 1 Mana Crystal this turn only.

describe('TheCoin141', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            startingPlayer: 1,

            player2: {
                'class': 'rogue',
                deck: [
                ],
            }
        });

        g.endTurn();

        g.test.replenishMana(1);

        expect(g.game.getCurrentMana()).to.equal(1);
        expect(g.game.getMaxMana()).to.equal(1);
        g.play(g.hand(4, 'The Coin'), 0, '{Dead}');
        expect(g.game.getCurrentMana()).to.equal(2);
        expect(g.game.getMaxMana()).to.equal(2);
        g.play(g.heroPower('Dagger Mastery'));
        g.weapon('1/2 Wicked Knife');
        expect(g.game.getCurrentMana()).to.equal(0);
        expect(g.game.getMaxMana()).to.equal(2);

        g.endTurn();
        g.endTurn();

        expect(g.game.getCurrentMana()).to.equal(2);
        expect(g.game.getMaxMana()).to.equal(2);
    });

});
