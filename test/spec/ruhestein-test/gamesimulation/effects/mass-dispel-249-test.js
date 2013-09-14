/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Mass Dispel; Silence all enemy minions. Draw a card.

describe('MassDispel249', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '2 Malygos'
                ],
                playCards: 2
            },
            player2: {
                deck: [
                    '1 Mass Dispel'
                ],
            }
        });

        g.oBattlefield(0, '4/12 {ZZZ}');
        g.oBattlefield(1, '4/12 {ZZZ}');
        expect(g.game.getOpponentSpellPower()).to.equal(10);
        expect(g.game.getHandCardCount()).to.equal(4);
        
        g.play(g.hand(0, 'Mass Dispel'), null, '{Dead}');

        g.oBattlefield(0, '4/12 {Silenced,ZZZ}');
        g.oBattlefield(1, '4/12 {Silenced,ZZZ}');
        expect(g.game.getOpponentSpellPower()).to.equal(0);
        expect(g.game.getHandCardCount()).to.equal(4);
    });

});
