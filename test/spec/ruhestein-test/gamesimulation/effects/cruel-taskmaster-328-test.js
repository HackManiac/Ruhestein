/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/1 Cruel Taskmaster; Battlecry: Deal 1 damage to a minion and give it +2 Attack.

describe('CruelTaskmaster328', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Cruel Taskmaster'
                ],
            }
        });

        g.play(g.hand(0, 'Cruel Taskmaster'), 0, '{}');

        // TODO
    });

});
