/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/4 Emboldener 3000; At the end of your turn, give a random minion +1/+1.

describe('Emboldener3000240', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Gelbin Mekkatorque'
                ],
            }
        });

        g.gm.predictRoll(4);
        g.play(g.hand(0, 'Gelbin Mekkatorque'), 0, '{ZZZ}');
        g.battlefield(1, '0/4 Emboldener 3000 {ZZZ}');

        g.gm.predictRoll(2);  // 2 = battlefield(1);
        g.endTurn();
        g.oBattlefield(1, '1/5');
        g.endTurn();
    });

});
