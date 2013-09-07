/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Steady Shot; Hero Power  Deal 2 damage to the enemy hero.

describe('SteadyShot481', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'hunter',
                deck: [
                ],
            }
        });

        g.oHero('0/30');
        g.play(g.heroPower('Steady Shot'), null);
        g.oHero('0/28');
    });

});
