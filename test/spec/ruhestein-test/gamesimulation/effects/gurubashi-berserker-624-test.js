/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 2/7 Gurubashi Berserker; Whenever this minion takes damage, gain +3 Attack.

describe('GurubashiBerserker624', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Gurubashi Berserker'
                ],
            }
        });

        g.play(g.hand(0, 'Gurubashi Berserker'), 0, '2/7 {ZZZ}');
        g.test.dealDamage(1, g.battlefield(0, '2/7'), '5/6');
        g.test.dealDamage(1, g.battlefield(0, '5/6'), '8/5');
        g.test.silence(g.battlefield(0, '8/5'), '2/5 {Silenced,ZZZ}');
        g.test.dealDamage(1, g.battlefield(0, '2/5'), '2/4');
    });

});
