/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 4/4 Dark Iron Dwarf; Battlecry: Give a minion +2 Attack.

describe('DarkIronDwarf128', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Dark Iron Dwarf'
                ],
            }
        });

        g.play(g.hand(0, 'Dark Iron Dwarf'), 0, '{}');

        // TODO
    });

});
