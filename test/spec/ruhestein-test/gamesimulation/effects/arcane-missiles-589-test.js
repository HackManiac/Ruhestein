/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Arcane Missiles; Shoot 3 missiles at random enemies for 1 damage each.

describe('ArcaneMissiles589', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Arcane Missiles',
                ],
            }
        });

        g.oHero('0/30');
        g.play(g.hand(0, 'Arcane Missiles'), 0, '{Dead}');
        g.oHero('0/27');
        g.test.playSpellPowerPlus5();
        g.play(g.hand(0, 'Arcane Missiles'), 0, '{Dead}');
        g.oHero('0/19');

        // TODO
    });

});
