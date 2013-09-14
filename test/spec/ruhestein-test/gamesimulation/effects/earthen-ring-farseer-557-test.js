/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Earthen Ring Farseer; Battlecry: Restore 3 Health.

describe('EarthenRingFarseer557', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Earthen Ring Farseer'
                ],
            }
        });

        g.test.dealDamage(10, g.hero('0/30'), '0/20');
        g.play(g.hand(0, 'Earthen Ring Farseer'), g.hero('0/20'), 0, '3/3 {ZZZ}', '0/23');
    });

});
