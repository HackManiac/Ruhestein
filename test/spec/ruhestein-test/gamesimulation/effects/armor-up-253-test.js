/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Armor Up!; Hero Power  Gain 2 Armor.

describe('ArmorUp253', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'Warrior',
            }
        });

        expect(g.game.getCurrentArmor()).to.equal(0);
        g.play(g.heroPower('Armor Up!'), null);
        expect(g.game.getCurrentArmor()).to.equal(2);
    });

});
