/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (9) 8/8 Onyxia; Battlecry: Summon 1/1 Whelps until your side of the battlefield is full.

describe('Onyxia432', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Onyxia'
                ],
            }
        });

        g.play(g.hand(0, 'Onyxia'), 0, '{}');

        // TODO
    });

});
