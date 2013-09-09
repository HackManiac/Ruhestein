/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Hex; Transform a minion into a 0/1 Frog with Taunt.

describe('Hex270', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos'
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Hex'
                ],
            }
        });

        expect(g.game.getOpponentSpellPower()).to.equal(5);
        g.play(g.hand(0, 'Hex'), g.oBattlefield(0, '4/12 Malygos'), '{Dead}');
        g.oBattlefield(0, '0/1 Frog {Taunt,ZZZ}');
        expect(g.game.getOpponentSpellPower()).to.equal(0);
    });

});
