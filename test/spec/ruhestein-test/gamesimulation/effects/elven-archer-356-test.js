/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Elven Archer; Battlecry: Deal 1 damage.

describe('ElvenArcher356', function() {

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
                    '1 Elven Archer'
                ],
            }
        });

        g.play(g.hand(0, 'Elven Archer'), g.oBattlefield(0, '4/12 Malygos'), 0, '{ZZZ}', '4/11');
    });

});
