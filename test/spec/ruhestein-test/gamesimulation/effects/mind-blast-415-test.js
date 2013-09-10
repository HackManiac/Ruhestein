/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Mind Blast; Deal 5 damage to the enemy hero.

describe('MindBlast415', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Mind Blast'
                ],
            }
        });

        g.oHero('0/30');
        g.play(g.hand(0, 'Mind Blast'), 0, '{Dead}');
        g.oHero('0/25');
        g.test.playSpellPowerPlus5();
        g.play(g.hand(0, 'Mind Blast'), 0, '{Dead}');
        g.oHero('0/15');
    });

});
