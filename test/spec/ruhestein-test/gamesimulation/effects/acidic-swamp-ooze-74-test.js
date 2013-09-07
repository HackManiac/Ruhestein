/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 3/2 Acidic Swamp Ooze; Battlecry: Destroy your opponent's weapon.

describe('AcidicSwampOoze74', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Acidic Swamp Ooze'
                ],
            }
        });

        g.play(g.hand(0, 'Acidic Swamp Ooze'), 0, '{}');

        // TODO
    });

});
