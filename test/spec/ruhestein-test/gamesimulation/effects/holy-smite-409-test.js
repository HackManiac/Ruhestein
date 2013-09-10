/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Holy Smite; Deal 2 damage.

describe('HolySmite409', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Holy Smite'
                ],
            }
        });

        g.play(g.hand(0, 'Holy Smite'), g.oHero('0/30'), '{Dead}', '0/28');
        g.test.playSpellPowerPlus5();
        g.play(g.hand(0, 'Holy Smite'), g.oHero('0/28'), '{Dead}', '0/21');
    });

});
