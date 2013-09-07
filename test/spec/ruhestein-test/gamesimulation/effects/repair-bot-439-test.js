/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/5 Repair Bot; At the end of your turn, restore 3 Health to all characters.

describe('RepairBot439', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Repair Bot'
                ],
            }
        });

        g.play(g.hand(0, 'Repair Bot'), 0, '{}');

        // TODO
    });

});
