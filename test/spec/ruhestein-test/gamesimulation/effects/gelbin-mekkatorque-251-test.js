/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 6/6 Gelbin Mekkatorque; Battlecry: Summon an AWESOME invention.

describe('GelbinMekkatorque251', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '4 Gelbin Mekkatorque'
                ],
            }
        });

        var inventions = [
            '0/5 Repair Bot',
            '0/3 Poultryizer',
            '0/1 Homing Chicken',
            '0/4 Emboldener 3000'
        ];

        for (var i = 0; i < inventions.length; i++) {
            var invention = inventions [i];

            g.test.replenishMana();
            g.gm.predictRoll(i + 1);
            g.play(g.hand(0, 'Gelbin Mekkatorque'), 0, '{ZZZ}');
            g.battlefield(1, invention);
            g.test.kill(g.battlefield(1));
            g.test.kill(g.battlefield(0));
        }
    });

});
