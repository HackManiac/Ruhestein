/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/3 Poultryizer; At the start of your turn, transform a random minion into a 1/1 Chicken.

describe('Poultryizer405', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Poultryizer'
                ],
            }
        });

        g.play(g.hand(0, 'Poultryizer'), 0, '{}');

        // TODO
    });

});
