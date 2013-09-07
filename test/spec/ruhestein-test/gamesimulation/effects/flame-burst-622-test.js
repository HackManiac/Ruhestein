/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Flame Burst; Shoot 5 missiles at random enemies for 1 damage each.

describe('FlameBurst622', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Flame Burst'
                ],
            }
        });

        g.play(g.hand(0, 'Flame Burst'), 0, '{}');

        // TODO
    });

});
