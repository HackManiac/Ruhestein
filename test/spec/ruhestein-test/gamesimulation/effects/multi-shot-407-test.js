/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Multi-Shot; Deal 3 damage to two random enemy minions.

describe('MultiShot407', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '2 Malygos'
                ],
                playCards: 2
            },
            player2: {
                deck: [
                    '2 Multi-Shot'
                ],
            }
        });

        g.oBattlefield(0, '4/12');
        g.oBattlefield(1, '4/12');
        g.play(g.hand(0, 'Multi-Shot'), null, '{Dead}');
        g.oBattlefield(0, '4/9');
        g.oBattlefield(1, '4/9');

        g.test.playSpellPowerPlus5();

        g.oBattlefield(0, '4/9');
        g.oBattlefield(1, '4/9');
        g.play(g.hand(0, 'Multi-Shot'), null, '{Dead}');
        g.oBattlefield(0, '4/1');
        g.oBattlefield(1, '4/1');
    });

});
