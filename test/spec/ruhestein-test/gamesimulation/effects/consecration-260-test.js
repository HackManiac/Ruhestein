/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Consecration; Deal 2 damage to all enemies.

describe('Consecration260', function() {

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
                    '1 Consecration'
                ],
            }
        });

        g.test.playSpellPowerPlus5();

        g.oHero('0/30');
        g.oBattlefield(0, '4/12');

        g.play(g.hand(0, 'Consecration'), null, '{Dead}');

        g.oHero('0/23');
        g.oBattlefield(0, '4/5');
    });

});
