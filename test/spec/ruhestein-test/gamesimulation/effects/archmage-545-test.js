/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 4/7 Archmage; Spell Power +1

describe('Archmage545', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Archmage'
                ],
            }
        });

        expect(g.game.getSpellPower()).to.equal(0);
        g.play(g.hand(0, 'Archmage'), 0, '{ZZZ}');
        expect(g.game.getSpellPower()).to.equal(1);
    });

});
