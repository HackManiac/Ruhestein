/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/3 Voidwalker; Taunt

describe('Voidwalker340', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Voidwalker'
                ],
            }
        });

        g.play(g.hand(0, 'Voidwalker'), 0, '{Taunt,ZZZ}');
    });

});
