/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/4 Nightblade; Battlecry: Deal 3 damage to the enemy hero.

describe('Nightblade184', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Nightblade'
                ],
            }
        });

        g.oHero('0/30');
        g.play(g.hand(0, 'Nightblade'), 0, '{ZZZ}');
        g.oHero('0/27');
    });

});
