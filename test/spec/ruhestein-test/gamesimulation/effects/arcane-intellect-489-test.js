/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Arcane Intellect; Draw 2 cards.

describe('ArcaneIntellect489', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Arcane Intellect'
                ],
            }
        });

        expect(g.game.getHandCardCount()).to.equal(4);
        g.play(g.hand(0, 'Arcane Intellect'), 0, '{Dead}');
        expect(g.game.getHandCardCount()).to.equal(5);
    });

});
