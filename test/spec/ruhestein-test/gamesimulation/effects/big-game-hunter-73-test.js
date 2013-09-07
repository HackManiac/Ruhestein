/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 4/2 Big Game Hunter; Battlecry: Destroy a minion with an Attack of 7 or more.

describe('BigGameHunter73', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Big Game Hunter'
                ],
            }
        });

        g.play(g.hand(0, 'Big Game Hunter'), 0, '{}');

        // TODO
    });

});
