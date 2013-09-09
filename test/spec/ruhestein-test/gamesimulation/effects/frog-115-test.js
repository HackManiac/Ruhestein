/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (0) 0/1 Frog; Taunt

describe('Frog115', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Hex'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Hex'), g.battlefield(0, '1/1 Wisp'), '{Dead}');
        g.battlefield(0, '0/1 {Taunt,ZZZ}');
    });

});
