/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (20) 8/8 Molten Giant; Costs (1) less for each damage your hero has taken.

describe('MoltenGiant94', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Molten Giant'
                ],
            }
        });

        g.play(g.hand(0, 'Molten Giant'), 0, '{}');

        // TODO
    });

});
