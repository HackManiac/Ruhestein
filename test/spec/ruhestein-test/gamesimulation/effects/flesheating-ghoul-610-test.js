/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/3 Flesheating Ghoul; Whenever a minion dies, gain +1 Attack.

describe('FlesheatingGhoul610', function() {

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
                    '1 Flesheating Ghoul'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Flesheating Ghoul'), 1, '2/3 {EffectTrigger,ZZZ}');
        g.test.kill(g.oBattlefield(0));
        g.battlefield(1, '3/3');
        g.test.kill(g.battlefield(0));
        g.battlefield(0, '4/3');
    });

});
