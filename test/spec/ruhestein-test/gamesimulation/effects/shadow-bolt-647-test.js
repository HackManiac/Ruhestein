/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Shadow Bolt; Deal 4 damage to a minion.

describe('ShadowBolt647', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shadow Bolt'
                ],
            }
        });

        g.play(g.hand(0, 'Shadow Bolt'), 0, '{}');

        // TODO
    });

});
