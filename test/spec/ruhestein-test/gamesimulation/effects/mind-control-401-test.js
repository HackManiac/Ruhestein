/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (8) Mind Control; Take control of an enemy minion.

describe('MindControl401', function() {

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
                    '1 Mind Control'
                ],
            }
        });

        g.oBattlefield(0, '4/12');
        g.battlefield(0, null);
        expect(g.game.getSpellPower()).to.equal(0);
        expect(g.game.getOpponentSpellPower()).to.equal(5);
        g.play(g.hand(0, 'Mind Control'), g.oBattlefield(0, '4/12'), '{Dead}', '4/12 {ZZZ}');
        g.oBattlefield(0, null);
        g.battlefield(0, '4/12');
        expect(g.game.getSpellPower()).to.equal(5);
        expect(g.game.getOpponentSpellPower()).to.equal(0);
    });

});
