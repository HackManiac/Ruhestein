/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 4/2 Jungle Panther; Stealth

describe('JunglePanther392', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Jungle Panther'
                ],
            }
        });

        g.play(g.hand(0, 'Jungle Panther'), 0, '{Stealth,ZZZ}');
    });

});
