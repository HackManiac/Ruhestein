/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 1/4 Demolisher; At the start of your turn, deal 2 damage to a random enemy.

describe('Demolisher212', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Demolisher'
                ],
            }
        });

        g.play(g.hand(0, 'Demolisher'), 0, '{EffectTrigger,ZZZ}');
        g.endTurn();
        g.hero('0/30');
        g.endTurn();
        g.oHero('0/28');

        g.endTurn();
        g.hero('0/28');
        g.endTurn();
        g.oHero('0/26');
    });

});
