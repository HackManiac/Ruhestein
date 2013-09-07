/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Hex; Transform a minion into a 0/1 Frog with Taunt.

describe('Hex270', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Hex'
                ],
            }
        });

        g.play(g.hand(0, 'Hex'), 0, '{}');

        // TODO
    });

});
