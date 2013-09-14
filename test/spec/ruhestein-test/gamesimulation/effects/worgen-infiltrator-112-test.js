/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 2/1 Worgen Infiltrator; Stealth

describe('WorgenInfiltrator112', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Worgen Infiltrator'
                ],
            }
        });

        g.play(g.hand(0, 'Worgen Infiltrator'), 0, '{Stealth,ZZZ}');
    });

});
