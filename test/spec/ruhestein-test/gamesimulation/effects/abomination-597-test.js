/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/4 Abomination; Taunt. Deathrattle: Deal 2 damage to ALL characters.

describe('Abomination597', function() {

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
                    '1 Abomination'
                ],
                playCards: 1
            }
        });

        g.hero('0/30');
        g.battlefield(0, '4/12');
        g.oHero('0/30');
        g.battlefield(0, '4/12');
        g.play(g.hand(0, 'Abomination'), 1, '4/4 {Deathrattle,Taunt,ZZZ}');
        g.hero('0/30');
        g.battlefield(0, '4/12');
        g.oHero('0/30');
        g.battlefield(0, '4/12');
        g.test.kill(g.battlefield(1, '4/4'));
        g.hero('0/28');
        g.battlefield(0, '4/10');
        g.oHero('0/28');
        g.battlefield(0, '4/10');
    });

});
