/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Consecration; Deal 2 damage to all enemies.

describe('Consecration260', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Consecration'
                ],
            }
        });

        g.play(g.hand(0, 'Consecration'), 0, '{}');

        // TODO
    });

});
