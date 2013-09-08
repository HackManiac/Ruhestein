/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Hunter's Mark; Change a minion's Health to 1 this turn.

describe('HuntersMark22', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work "correctly"', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Bloodfen Raptor'
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Stormwind Knight',
                    '1 Hunter\'s Mark'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Hunter\'s Mark'), g.oBattlefield(0, '3/2 Bloodfen Raptor'), '{Dead}', '3/1');
        g.play(g.battlefield(0, '2/5 Stormwind Knight'), g.oBattlefield(0, '3/1 Bloodfen Raptor'), '2/2', '3/1');
    });

});
