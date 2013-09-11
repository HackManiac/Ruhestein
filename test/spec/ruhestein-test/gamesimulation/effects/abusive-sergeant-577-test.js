/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 2/1 Abusive Sergeant; Battlecry: Give a friendly minion +2 Attack this turn.

describe('AbusiveSergeant577', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wisp',
                    '1 Abusive Sergeant'
                ],
                playCards: 1
            }
        });

        g.play(g.hand(0, 'Abusive Sergeant'), g.battlefield(0, '1/1'), 1, '{ZZZ}', '3/1');
        g.endTurn();
        g.oBattlefield(0, '1/1');
    });

});
