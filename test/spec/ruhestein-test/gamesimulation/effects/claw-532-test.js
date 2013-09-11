/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Claw; Give your hero +2 Attack this turn and 2 Armor.

describe('Claw532', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Claw'
                ],
            }
        });

        g.hero('0/30 [0]');
        g.play(g.hand(0, 'Claw'), null, '{Dead}');
        g.hero('2/30 [2]');
        g.endTurn();
        g.oHero('0/30 [2]');
        g.endTurn();
        g.hero('0/30 [2]');
    });

});
