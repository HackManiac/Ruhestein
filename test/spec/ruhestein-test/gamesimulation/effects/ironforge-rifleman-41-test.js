/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/2 Ironforge Rifleman; Battlecry: Deal 1 damage.

describe('IronforgeRifleman41', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                deck: [
                    '1 Malygos'
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Ironforge Rifleman'
                ],
            }
        });

        g.play(g.hand(0, 'Ironforge Rifleman'), g.oBattlefield(0, '4/12'), 0, '{ZZZ}', '4/11');
    });

});
