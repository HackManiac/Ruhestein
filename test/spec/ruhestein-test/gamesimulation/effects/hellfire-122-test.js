/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Hellfire; Deal 3 damage to ALL characters.

describe('Hellfire122', function() {

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
                    '1 Malygos',
                    '1 Hellfire'
                ],
                playCards: 1
            }
        });

        g.hero('0/30');
        g.battlefield(0, '4/12');
        g.oHero('0/30');
        g.oBattlefield(0, '4/12');

        g.play(g.hand(0, 'Hellfire'), null, '{Dead}');

        g.hero('0/22');
        g.battlefield(0, '4/4');
        g.oHero('0/22');
        g.oBattlefield(0, '4/4');
    });

});
