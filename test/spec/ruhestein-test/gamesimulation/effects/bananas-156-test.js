/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Bananas; Give a friendly minion +1/+1. (+1 Attack/+1 Health)

describe('Bananas156', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Bananas'
                ],
            }
        });

        g.play(g.hand(0, 'Bananas'), 0, '{}');

        // TODO
    });

});
