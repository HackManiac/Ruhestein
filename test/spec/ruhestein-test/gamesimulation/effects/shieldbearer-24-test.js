/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/4 Shieldbearer; Taunt

describe('Shieldbearer24', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shieldbearer'
                ],
            }
        });

        g.play(g.hand(0, 'Shieldbearer'), 0, '0/4 {Taunt,ZZZ}');
    });

});
