/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Starving Buzzard; Whenever you summon a Beast, draw a card.

describe('StarvingBuzzard101', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Starving Buzzard',
                    '1 Bloodfen Raptor',
                    '1 Wisp',
                ],
            }
        });

        expect(g.game.getHandCardCount()).to.equal(4);
        g.play(g.hand(0, 'Starving Buzzard'), 0, '{EffectTrigger,ZZZ}');
        expect(g.game.getHandCardCount()).to.equal(3);
        g.play(g.hand(0, 'Bloodfen Raptor'), 1, '{ZZZ}');
        expect(g.game.getHandCardCount()).to.equal(3);
        g.play(g.hand(0, 'Wisp'), 2, '{ZZZ}');
        expect(g.game.getHandCardCount()).to.equal(2);
    });

});
