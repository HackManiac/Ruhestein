/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/2 Bloodsail Corsair; Battlecry: Remove 1 Durability from your opponent's weapon.

describe('BloodsailCorsair453', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Bloodsail Corsair'
                ],
            }
        });

        g.play(g.hand(0, 'Bloodsail Corsair'), 0, '{}');

        // TODO
    });

});
