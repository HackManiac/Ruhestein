/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/3 Thrallmar Farseer; Windfury

describe('ThrallmarFarseer265', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Thrallmar Farseer'
                ],
            }
        });

        g.play(g.hand(0, 'Thrallmar Farseer'), 0, '{Windfury,ZZZ}');
    });

});
