/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 3/2 Acidic Swamp Ooze; Battlecry: Destroy your opponent's weapon.

describe('AcidicSwampOoze74', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player1: {
                class: 'warrior',
                deck: [
                    '1 Arcanite Reaper'
                ],
                playCards: 1
            },
            player2: {
                deck: [
                    '1 Acidic Swamp Ooze'
                ],
            }
        });

        g.oWeapon('5/2 Arcanite Reaper');
        g.play(g.hand(0, 'Acidic Swamp Ooze'), 0, '{ZZZ}');
        g.oWeapon(null);
    });

});
