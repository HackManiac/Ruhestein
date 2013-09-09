/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Wild Growth; Gain an empty Mana Crystal.

describe('WildGrowth282', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wild Growth'
                ],
            }
        });

        g.test.replenishMana(2);
        g.play(g.hand(0, 'Wild Growth'), null, '{Dead}');
        expect(g.game.getMaxMana()).to.equal(3);
        expect(g.game.getCurrentMana()).to.equal(0);

        g.endTurn();
        g.endTurn();

        expect(g.game.getMaxMana()).to.equal(4);
        expect(g.game.getCurrentMana()).to.equal(4);
    });

});
