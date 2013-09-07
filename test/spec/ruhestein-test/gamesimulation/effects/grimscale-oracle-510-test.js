/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Grimscale Oracle; ALL other Murlocs have +1 Attack.

describe('GrimscaleOracle510', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Grimscale Oracle'
                ],
            }
        });

        g.play(g.hand(0, 'Grimscale Oracle'), 0, '{}');

        // TODO
    });

});
