/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Tracking; Look at the top three cards of your deck. Draw one and discard the others.

describe('Tracking163', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '4 Tracking',
                    '1 Wisp',
                    '1 Bloodfen Raptor',
                    '1 Malygos',
                    '1 Wisp',
                    '1 Bloodfen Raptor',
                    '1 Malygos',
                    '1 Wisp',
                    '1 Bloodfen Raptor',
                    '1 Malygos',
                ],
            }
        });

        expect(g.game.getHandCardCount()).to.equal(4);
        expect(g.game.getDrawPileCardCount()).to.equal(26);

        g.gm.predictCardChoice([0]);
        g.play(g.hand(0, 'Tracking'), null, '{Dead}');
        expect(g.game.getHandCardCount()).to.equal(4);
        expect(g.game.getDrawPileCardCount()).to.equal(23);
        g.hand(3, 'Wisp');

        g.gm.predictCardChoice([1]);
        g.play(g.hand(0, 'Tracking'), null, '{Dead}');
        expect(g.game.getHandCardCount()).to.equal(4);
        expect(g.game.getDrawPileCardCount()).to.equal(20);
        g.hand(3, 'Bloodfen Raptor');

        g.gm.predictCardChoice([2]);
        g.play(g.hand(0, 'Tracking'), null, '{Dead}');
        expect(g.game.getHandCardCount()).to.equal(4);
        expect(g.game.getDrawPileCardCount()).to.equal(17);
        g.hand(3, 'Malygos');
    });

});
