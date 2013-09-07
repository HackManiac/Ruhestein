/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/3 Bloodsail Raider; Battlecry: Gain Attack equal to the Attack of your weapon.

describe('BloodsailRaider637', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Bloodsail Raider'
                ],
            }
        });

        g.play(g.hand(0, 'Bloodsail Raider'), 0, '{}');

        // TODO
    });

});
