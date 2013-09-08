/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/1 Homing Chicken; At the start of your turn, destroy this minion and draw 3 cards.

describe('HomingChicken423', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Gelbin Mekkatorque'
                ],
            }
        });

        g.gm.predictRoll(3);
        g.play(g.hand(0, 'Gelbin Mekkatorque'), 0, '{ZZZ}');
        g.battlefield(1, 'Homing Chicken');
        expect(g.game.getHandCardCount()).to.equal(3);

        g.endTurn();
        g.endTurn();
        expect(g.game.getHandCardCount()).to.equal(7);
        g.battlefield(1, null);

        g.endTurn();
        g.endTurn();
        expect(g.game.getHandCardCount()).to.equal(8);
    });

});
