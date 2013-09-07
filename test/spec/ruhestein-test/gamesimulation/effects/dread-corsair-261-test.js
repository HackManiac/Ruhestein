/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 3/3 Dread Corsair; Taunt. Costs (1) less per Attack of your weapon.

describe('DreadCorsair261', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Dread Corsair'
                ],
            }
        });

        g.play(g.hand(0, 'Dread Corsair'), 0, '{}');

        // TODO
    });

});
