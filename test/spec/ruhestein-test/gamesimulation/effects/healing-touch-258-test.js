/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Healing Touch; Restore #8 Health.

describe('HealingTouch258', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Healing Touch'
                ],
            }
        });

        g.test.dealDamage(10, g.hero('0/30'), '0/20');

        g.play(g.hand(0, 'Healing Touch'), g.hero('0/20'), '{Dead}', '0/28');
    });

});
