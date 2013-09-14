/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/3 Tauren Warrior; Taunt. Enrage: +3 Attack

describe('TaurenWarrior477', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Tauren Warrior'
                ],
            }
        });

        g.play(g.hand(0, 'Tauren Warrior'), 0, '2/3 {Taunt,ZZZ}');
        g.test.dealDamage(1, g.battlefield(0, '2/3'), '5/2');
        g.test.dealDamage(1, g.battlefield(0, '5/2'), '5/1');
        g.test.healDamage(3, g.battlefield(0, '5/1'), '2/3');
    });

});
