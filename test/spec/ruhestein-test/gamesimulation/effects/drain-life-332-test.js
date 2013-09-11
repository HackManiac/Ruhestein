/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Drain Life; Deal 2 damage. Restore #2 Health to your hero.

describe('DrainLife332', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Drain Life'
                ],
            }
        });

        g.test.playSpellPowerPlus5();
        g.test.dealDamage(10, g.hero('0/30'), '0/20');

        g.play(g.hand(0, 'Drain Life'), g.oHero('0/30'), '{Dead}', '0/23');

        g.hero('0/22');
    });

});
