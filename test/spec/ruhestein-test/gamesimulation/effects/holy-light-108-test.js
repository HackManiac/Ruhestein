/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Holy Light; Restore #6 Health.

describe('HolyLight108', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Malygos',
                    '1 Holy Light'
                ],
                playCards: 1
            }
        });

        expect(g.game.getSpellPower()).to.equal(5);

        g.test.dealDamage(11, g.battlefield(0, '4/12'), '4/1');

        g.play(g.hand(0, 'Holy Light'), g.battlefield(0, '4/1'), '{Dead}', '4/7');
    });

});
