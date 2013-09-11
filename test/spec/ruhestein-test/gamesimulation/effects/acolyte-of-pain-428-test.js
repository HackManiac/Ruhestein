/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 1/3 Acolyte of Pain; Whenever this minion takes damage, draw a card.

describe('AcolyteOfPain428', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Acolyte of Pain'
                ],
            }
        });

        g.play(g.hand(0, 'Acolyte of Pain'), 0, '{ZZZ}');
        expect(g.game.getHandCardCount()).to.equal(3);
        g.test.dealDamage(1, g.battlefield(0, '1/3'), '1/2');
        expect(g.game.getHandCardCount()).to.equal(4);
        g.test.dealDamage(1, g.battlefield(0, '1/2'), '1/1');
        expect(g.game.getHandCardCount()).to.equal(5);
    });

});
