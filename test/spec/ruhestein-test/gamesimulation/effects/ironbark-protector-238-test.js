/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (8) 8/8 Ironbark Protector; Taunt

describe('IronbarkProtector238', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ironbark Protector'
                ],
            }
        });

        g.play(g.hand(0, 'Ironbark Protector'), 0, '{Taunt,ZZZ}');
    });

});
