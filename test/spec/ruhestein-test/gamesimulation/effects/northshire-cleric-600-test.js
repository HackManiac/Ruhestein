/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/3 Northshire Cleric; Whenever a minion is healed, draw a card.

describe('NorthshireCleric600', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Northshire Cleric'
                ],
                playCards: 1
            }
        });

        g.test.dealDamage(1, g.battlefield(0, '4/12 Malygos'));

        g.play(g.hand(0, 'Northshire Cleric'), 1, '{EffectTrigger,ZZZ}');
        expect(g.game.getHandCardCount()).to.equal(2);

        g.test.healDamage(2, g.battlefield(0, '4/11 Malygos'));
        expect(g.game.getHandCardCount()).to.equal(3);

        g.test.healDamage(2, g.battlefield(0, '4/12 Malygos'));
        expect(g.game.getHandCardCount()).to.equal(3);

        g.test.kill(g.battlefield(1, '1/3 Northshire Cleric'));
        g.test.dealDamage(1, g.battlefield(0, '4/12 Malygos'));

        g.test.healDamage(2, g.battlefield(0, '4/11 Malygos'));
        expect(g.game.getHandCardCount()).to.equal(3);
    });

});
