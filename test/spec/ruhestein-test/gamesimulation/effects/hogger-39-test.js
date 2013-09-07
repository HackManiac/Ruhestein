/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 4/4 Hogger; At the end of your turn, summon a 2/2 Gnoll with Taunt.

describe('Hogger39', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Hogger'
                ],
            }
        });

        g.play(g.hand(0, 'Hogger'), 0, '{}');

        // TODO
    });

});
