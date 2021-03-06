/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/3 Razorfen Hunter; Battlecry: Summon a 1/1 Boar.

describe('RazorfenHunter47', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Razorfen Hunter'
                ],
            }
        });

        g.play(g.hand(0, 'Razorfen Hunter'), 0, '{ZZZ}');
        g.battlefield(1, '1/1 Boar {ZZZ}');
    });

});
