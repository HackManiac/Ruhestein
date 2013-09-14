/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (10) 12/12 Deathwing; Battlecry: Destroy all other minions and discard your hand.

describe('Deathwing474', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '2 Malygos',
                ],
                playCards: 2
            },
            player2: {
                deck: [
                    '2 Malygos',
                    '1 Deathwing'
                ],
                playCards: 2
            }
        });

        g.play(g.hand(0, 'Deathwing'), 2, '{ZZZ}', null, 0);
        expect(g.game.getOpponentBattlefieldCardCount()).to.equal(0);
        expect(g.game.getBattlefieldCardCount()).to.equal(1);
        expect(g.game.getHandCardCount()).to.equal(0);
    });

});
