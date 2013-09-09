/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 5/4 Booty Bay Bodyguard; Taunt

describe('BootyBayBodyguard27', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Booty Bay Bodyguard'
                ],
            }
        });

        g.play(g.hand(0, 'Booty Bay Bodyguard'), 0, '{Taunt,ZZZ}');
    });

});
