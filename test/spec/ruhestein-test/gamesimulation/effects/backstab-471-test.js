/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Backstab; Deal 2 damage to an enemy minion.

describe('Backstab471', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos'
                ],
                playCards: 1,
            },
            player2: {
                deck: [
                    '2 Backstab'
                ],
            }
        });

        g.play(g.hand(0, 'Backstab'), g.oBattlefield(0, '4/12 Malygos'), '{Dead}', '4/10');

        g.test.playSpellPowerPlus5();

        g.play(g.hand(0, 'Backstab'), g.oBattlefield(0, '4/10 Malygos'), '{Dead}', '4/3');
    });

});
