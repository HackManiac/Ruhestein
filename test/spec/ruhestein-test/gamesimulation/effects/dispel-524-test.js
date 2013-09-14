/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Dispel; Silence a minion.

describe('Dispel524', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Keeper of the Grove'
                ],
                playCards: 1
            }
        });

        expect(g.game.getSpellPower()).to.equal(5);
        g.playChooseOne(g.hand(0, 'Keeper of the Grove'), 1, g.battlefield(0, '4/12 {ZZZ}'), 1, '{ZZZ}', '4/12 {Silenced,ZZZ}');
        expect(g.game.getSpellPower()).to.equal(0);
    });

});
