/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Young Dragonhawk; Windfury

describe('YoungDragonhawk629', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Young Dragonhawk'
                ],
            }
        });

        g.play(g.hand(0, 'Young Dragonhawk'), 0, '{}');

        // TODO
    });

});
