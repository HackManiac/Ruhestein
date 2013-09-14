/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 4/4 Dark Iron Dwarf; Battlecry: Give a minion +2 Attack.

describe('DarkIronDwarf128', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Dark Iron Dwarf'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Dark Iron Dwarf'), g.battlefield(0, '1/1 Wisp'), 1, '{ZZZ}', '3/1 Wisp');
        g.test.kill(g.battlefield(1, '4/4 Dark Iron Dwarf'));
        g.battlefield(0, '3/1 Wisp');
    });

});
