/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/1 Wolfrider; Charge

describe('Wolfrider174', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wolfrider'
                ],
            }
        });

        g.play(g.hand(0, 'Wolfrider'), 0, '{Charge}');
    });

});
