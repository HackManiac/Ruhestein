/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 0/4 Lightspawn; This minion's Attack is always equal to its Health.

describe('Lightspawn192', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Lightspawn'
                ],
            }
        });

        g.play(g.hand(0, 'Lightspawn'), 0, '4/4 {ZZZ}');
        g.test.dealDamage(1, g.battlefield(0, '4/4'), '3/3');
    });

});
