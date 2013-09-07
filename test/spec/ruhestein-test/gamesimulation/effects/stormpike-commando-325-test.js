/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/2 Stormpike Commando; Battlecry: Deal 2 damage.

describe('StormpikeCommando325', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Stormpike Commando'
                ],
            }
        });

        g.play(g.hand(0, 'Stormpike Commando'), 0, '{}');

        // TODO
    });

});
