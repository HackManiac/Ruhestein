/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Sinister Strike; Deal 3 damage to the enemy hero.

describe('SinisterStrike205', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Sinister Strike'
                ],
            }
        });

        g.oHero('0/30');

        g.play(g.hand(0, 'Sinister Strike'), 0, '{Dead}');
        g.oHero('0/27');

        g.test.playSpellPowerPlus5();

        g.play(g.hand(0, 'Sinister Strike'), 0, '{Dead}');
        g.oHero('0/19');
    });

});
