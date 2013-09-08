/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Frostbolt; Deal 3 damage to a character and Freeze it.

describe('Frostbolt177', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos',
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '2 Frostbolt'
                ],
            }
        });

        g.play(g.hand(0, 'Frostbolt'), g.oBattlefield(0, '4/12 Malygos {ZZZ}'), '{Dead}', '4/9 {Frozen,ZZZ}');

        g.test.playSpellPowerPlus5();

        g.play(g.hand(0, 'Frostbolt'), g.oHero(0, '0/30 {}'), '{Dead}', '0/22 {Frozen}');
    });

});
