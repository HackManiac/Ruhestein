/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Timber Wolf; Your other Beasts have +1 Attack.

describe('TimberWolf86', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Bloodfen Raptor'
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Bloodfen Raptor',
                    '1 Wisp',
                    '1 Timber Wolf'
                ],
                playCards: 2
            }
        });

        g.battlefield(0, '3/2');
        g.battlefield(1, '1/1');
        g.oBattlefield(0, '3/2');
        g.play(g.hand(0, 'Timber Wolf'), 2, '{ZZZ}');
        g.battlefield(0, '4/2');
        g.battlefield(1, '1/1');
        g.oBattlefield(0, '3/2');
    });

});
