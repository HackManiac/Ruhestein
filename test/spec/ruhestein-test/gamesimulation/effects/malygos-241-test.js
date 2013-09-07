/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (9) 4/12 Malygos; Spell Power +5

describe('Malygos241', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Malygos'
                ],
            }
        });

        expect(g.game.getSpellPower()).to.equal(0);
        g.play(g.hand(0, 'Malygos'), 0, '{ZZZ}');
        expect(g.game.getSpellPower()).to.equal(5);
        g.test.kill(g.battlefield(0, 'Malygos'));
        expect(g.game.getSpellPower()).to.equal(0);

        g.test.replenishMana();

        expect(g.game.getSpellPower()).to.equal(0);
        g.play(g.hand(0, 'Malygos'), 0, '{ZZZ}');
        expect(g.game.getSpellPower()).to.equal(5);
        g.test.silence(g.battlefield(0, 'Malygos'));
        expect(g.game.getSpellPower()).to.equal(0);
        g.test.kill(g.battlefield(0, 'Malygos'));
        expect(g.game.getSpellPower()).to.equal(0);
    });

});
