/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/2 Wrath of Air Totem; Spell Power +1

describe('WrathOfAirTotem365', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'Shaman',
                deck: [
                ],
            }
        });

        expect(g.game.getSpellPower()).to.equal(0);
        g.gm.predictRoll(4);
        g.play(g.heroPower('Totemic Call'), null);
        g.battlefield(0, '0/2 Wrath of Air Totem {ZZZ}');
        expect(g.game.getSpellPower()).to.equal(1);
    });

});
