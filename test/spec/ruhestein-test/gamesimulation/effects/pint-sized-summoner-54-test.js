/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Pint-Sized Summoner; The first minion you play each turn costs (2) less.

describe('PintSizedSummoner54', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Pint-Sized Summoner',
                    '1 Magma Rager',
                    '1 Murloc Raider',
                    '1 Arcane Intellect',
                ],
            }
        });

        var expectCurrentMana = function(expectedMana) {
            expect(g.game.getCurrentMana()).to.equal(expectedMana);
        };

        expectCurrentMana(10);
        g.play(g.hand(0, 'Pint-Sized Summoner'), 0, '{ZZZ}');
        expectCurrentMana(8);
        g.hand(0, '(3) Magma Rager');
        g.hand(1, '(1) Murloc Raider');
        g.endTurn();
        g.endTurn();

        g.hand(0, '(1) Magma Rager');
        g.hand(1, '(0) Murloc Raider');
        expectCurrentMana(10);
        g.play(g.hand(2, '(3) Arcane Intellect'), null);
        g.hand(0, '(1) Magma Rager');
        g.hand(1, '(0) Murloc Raider');
        expectCurrentMana(7);
        g.play(g.hand(0, '(1) Magma Rager'), 0);
        expectCurrentMana(6);
        g.hand(0, '(1) Murloc Raider');
        g.endTurn();
        g.endTurn();

        // TODO
    });

});
