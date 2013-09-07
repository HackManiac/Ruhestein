/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 2/1 Voodoo Doctor; Battlecry: Restore 2 Health.

describe('VoodooDoctor410', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Voodoo Doctor'
                ],
            }
        });

        g.test.dealDamage(3, g.hero('0/30'), '0/27');
        g.play(g.hand(0, 'Voodoo Doctor'), g.hero('0/27'), '{ZZZ}', '0/29');
    });

});
