/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Noble Sacrifice; Secret: When an enemy attacks, summon a 2/1 Defender as the new target.

describe('NobleSacrifice158', function() {

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
                    '1 Noble Sacrifice'
                ],
            }
        });

        expect(g.game.getSecretCount()).to.equal(0);
        g.play(g.hand(0, 'Noble Sacrifice'), null);
        expect(g.game.getSecretCount()).to.equal(1);
        g.endTurn();

        expect(g.game.getOpponentSecretCount()).to.equal(1);
        g.play(g.battlefield(0, '4/12 Malygos'), g.oHero('0/30'), '4/10', '0/30');
        expect(g.game.getOpponentSecretCount()).to.equal(0);
    });

});
