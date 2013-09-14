/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (7) 7/5 Ravenholdt Assassin; Stealth

describe('RavenholdtAssassin518', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ravenholdt Assassin'
                ],
            }
        });

        g.play(g.hand(0, 'Ravenholdt Assassin'), 0, '{Stealth,ZZZ}');
    });

});
