/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 3/5 Stampeding Kodo; Battlecry: Destroy a random enemy minion with 2 or less Attack.

describe('StampedingKodo389', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Stampeding Kodo'
                ],
            }
        });

        g.play(g.hand(0, 'Stampeding Kodo'), 0, '{}');

        // TODO
    });

});
