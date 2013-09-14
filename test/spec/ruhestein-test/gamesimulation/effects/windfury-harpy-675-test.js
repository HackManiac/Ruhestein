/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 4/5 Windfury Harpy; Windfury

describe('WindfuryHarpy675', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Windfury Harpy'
                ],
            }
        });

        g.play(g.hand(0, 'Windfury Harpy'), 0, '{Windfury,ZZZ}');
    });

});
