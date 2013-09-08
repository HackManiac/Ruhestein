/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/3 Poultryizer; At the start of your turn, transform a random minion into a 1/1 Chicken.

describe('Poultryizer405', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos'
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Gelbin Mekkatorque'
                ],
                playCards: 1
            }
        });

        g.gm.predictRoll(2);
        g.play(g.hand(0, 'Gelbin Mekkatorque'), 1, '{ZZZ}');
        g.battlefield(2, 'Poultryizer');

        g.gm.predictRoll(4); // 4 = oBattlefield(0)
        g.oBattlefield(0, '4/12 Malygos');
        g.endTurn();
        g.endTurn();
        g.oBattlefield(0, '1/1 Chicken');

        g.gm.predictRoll(3); // 3 = battlefield(2)
        g.battlefield(2, 'Poultryizer');
        g.endTurn();
        g.endTurn();
        g.battlefield(2, '1/1 Chicken');

        g.gm.predictRoll(2); // 2 = battlefield(1)
        g.battlefield(1, 'Gelbin Mekkatorque');
        g.endTurn();
        g.endTurn();
        g.battlefield(1, 'Gelbin Mekkatorque');
    });

});
