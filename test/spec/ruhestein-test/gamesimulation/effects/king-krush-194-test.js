/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (9) 8/8 King Krush; Charge

describe('KingKrush194', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 King Krush'
                ],
            }
        });

        g.play(g.hand(0, 'King Krush'), 0, '8/8 {Charge}');
    });

});
