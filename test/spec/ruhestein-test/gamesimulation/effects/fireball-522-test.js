/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Fireball; Deal 6 damage.

describe('Fireball522', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos'
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '2 Fireball'
                ],
            }
        });

        g.play(g.hand(0, 'Fireball'), g.oBattlefield(0, '4/12 Malygos'), '{Dead}', '4/6');
        g.test.healDamage(6, g.oBattlefield(0, '4/6'), '4/12');
        g.test.playSpellPowerPlus5();
        g.play(g.hand(0, 'Fireball'), g.oBattlefield(0, '4/12 Malygos'), '{Dead}', '4/1');
    });

});
