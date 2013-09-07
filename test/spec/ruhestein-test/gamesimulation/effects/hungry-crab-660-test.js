/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/2 Hungry Crab; Battlecry: Destroy a Murloc and gain +2/+2.

describe('HungryCrab660', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Hungry Crab'
                ],
            }
        });

        g.play(g.hand(0, 'Hungry Crab'), 0, '{}');

        // TODO
    });

});
