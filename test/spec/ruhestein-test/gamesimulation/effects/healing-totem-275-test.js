/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/2 Healing Totem; At the end of your turn, restore 1 Health to all friendly characters.

describe('HealingTotem275', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Healing Totem'
                ],
            }
        });

        g.play(g.hand(0, 'Healing Totem'), 0, '{}');

        // TODO
    });

});
