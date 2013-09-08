/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/5 Darkscale Healer; Battlecry: Restore 2 Health to all friendly characters.

describe('DarkscaleHealer84', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Darkscale Healer'
                ],
                playCards: 1
            }
        });

        g.test.dealDamage(3, g.hero('0/30'), '0/27');
        g.test.dealDamage(3, g.battlefield(0, '4/12'), '4/9');

        g.play(g.hand(0, 'Darkscale Healer'), 1, '{ZZZ}');

        g.hero('0/29');
        g.battlefield(0, '4/11');
    });

});
