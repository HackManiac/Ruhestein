/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Ancient Teachings; Draw 2 cards.

describe('AncientTeachings517', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ancient of Lore'
                ],
            }
        });

        expect(g.game.getHandCardCount()).to.equal(4);
        g.playChooseOne(g.hand(0, 'Ancient of Lore'), 0, 0, '{ZZZ}');
        expect(g.game.getHandCardCount()).to.equal(5);
    });

});
