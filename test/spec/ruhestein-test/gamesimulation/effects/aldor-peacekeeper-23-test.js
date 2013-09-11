/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Aldor Peacekeeper; Battlecry: Change an enemy minion's Attack to 1.

describe('AldorPeacekeeper23', function() {

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
                    '1 Aldor Peacekeeper'
                ],
            }
        });

        g.play(g.hand(0, 'Aldor Peacekeeper'), g.oBattlefield(0, '4/12'), 0, '{ZZZ}', '1/12');
    });

});
