/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 5/5 Stranglethorn Tiger; Stealth

describe('StranglethornTiger338', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Stranglethorn Tiger'
                ],
            }
        });

        g.play(g.hand(0, 'Stranglethorn Tiger'), 0, '{Stealth,ZZZ}');
    });

});
