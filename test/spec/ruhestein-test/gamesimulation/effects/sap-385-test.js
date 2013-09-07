/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Sap; Return an enemy minion to its owner's hand.

describe('Sap385', function() {

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
                    '1 Sap'
                ],
            }
        });

        expect(g.game.getOpponentSpellPower()).to.equal(5);
        g.play(g.hand(0, 'Sap'), g.oBattlefield(0, '4/12 Malygos'), '{Dead}');
        g.oBattlefield(0, null);
        expect(g.game.getOpponentSpellPower()).to.equal(0);
    });

});
