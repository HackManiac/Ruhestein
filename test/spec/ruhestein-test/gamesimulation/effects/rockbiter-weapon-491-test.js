/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Rockbiter Weapon; Give a friendly character +3 Attack this turn.

describe('RockbiterWeapon491', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Rockbiter Weapon'
                ],
            }
        });

        g.play(g.hand(0, 'Rockbiter Weapon'), g.hero('0/30'), '{Dead}', '3/30');
        g.endTurn();
        g.oHero('0/30');
    });

});
