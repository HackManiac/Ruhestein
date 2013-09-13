/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/1 Ironbeak Owl; Battlecry: Silence a minion.

describe('IronbeakOwl500', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Ironbeak Owl'
                ],
                playCards: 1
            }
        });

        expect(g.game.getSpellPower()).to.equal(5);
        g.play(g.hand(0, 'Ironbeak Owl'), g.battlefield(0, '4/12 {ZZZ}'), 1, '{ZZZ}', '{Silenced,ZZZ}');
        expect(g.game.getSpellPower()).to.equal(0);
    });

});
