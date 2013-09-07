/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Shattered Sun Cleric; Battlecry: Give a friendly minion +1/+1.

describe('ShatteredSunCleric434', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Shattered Sun Cleric'
                ],
            }
        });

        g.play(g.hand(0, 'Shattered Sun Cleric'), 0, '{ZZZ}');
        g.play(g.hand(0, 'Shattered Sun Cleric'), g.battlefield(0, '3/3'), 1, '{ZZZ}', '4/4');
        g.test.silence(g.battlefield(1, '3/3'));
        g.battlefield(0, '4/4');
        g.test.kill(g.battlefield(1, '3/3'));
        g.battlefield(0, '4/4');
    });

});
