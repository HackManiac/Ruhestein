/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Argent Squire; Divine Shield

describe('ArgentSquire473', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Argent Squire'
                ],
            }
        });

        g.play(g.hand(0, 'Argent Squire'), 0, '{DivineShield,ZZZ}');
    });

});
