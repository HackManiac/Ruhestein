/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (7) 5/6 Guardian of Kings; Battlecry: Restore 6 Health to your hero.

describe('GuardianOfKings283', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Guardian of Kings'
                ],
            }
        });

        g.test.dealDamage(10, g.hero('0/30'), '0/20');
        g.play(g.hand(0, 'Guardian of Kings'), 0, '{ZZZ}');
        g.hero('0/26');
    });

});
