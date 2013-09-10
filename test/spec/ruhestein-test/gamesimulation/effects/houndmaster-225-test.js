/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 4/3 Houndmaster; Battlecry: Give a friendly Beast +2/+2 and Taunt.

describe('Houndmaster225', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Bloodfen Raptor',
                    '1 Houndmaster'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Houndmaster'), g.battlefield(0, '3/2 Bloodfen Raptor {ZZZ}'), '{ZZZ}', '5/4 {Taunt,ZZZ}');
    });

});
