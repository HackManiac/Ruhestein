/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 4/3 Succubus; Battlecry: Discard a random card.

describe('Succubus208', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Succubus',
                    '1 Wisp',
                    '1 Bloodfen Raptor',
                    '1 Malygos'
                ],
            }
        });

        expect(g.game.getHandCardCount()).to.equal(4);
        g.gm.predictRoll(3);
        g.play(g.hand(0, 'Succubus'), 0, '{ZZZ}');
        expect(g.game.getHandCardCount()).to.equal(2);
        g.hand(0, 'Wisp');
        g.hand(1, 'Bloodfen Raptor');
    });

});
