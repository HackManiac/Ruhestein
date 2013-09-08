/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Explosive Trap; Secret: When your hero is attacked, deal 2 damage to all enemies.

describe('ExplosiveTrap344', function() {

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
                    '3 Explosive Trap'
                ],
            }
        });

        g.play(g.hand(0, 'Explosive Trap'), null);

        g.endTurn();

        g.hero('0/30');
        g.play(g.battlefield(0, '4/12 Malygos'), g.oHero('0/30'), '4/10', '0/26');
        g.hero('0/28');

        g.endTurn();

        g.test.playSpellPowerPlus5();
        g.play(g.hand(0, 'Explosive Trap'), null);

        g.endTurn();

        g.hero('0/28');
        g.play(g.battlefield(0, '4/10 Malygos'), g.oHero('0/26'), '4/3', '0/22');
        g.hero('0/21');

        g.endTurn();

        g.play(g.hand(0, 'Explosive Trap'), null);

        g.endTurn();

        g.hero('0/21');
        g.play(g.battlefield(0, '4/3 Malygos'), g.oHero('0/22'), '{Dead}', '0/22');
        g.hero('0/14');
    });

});
