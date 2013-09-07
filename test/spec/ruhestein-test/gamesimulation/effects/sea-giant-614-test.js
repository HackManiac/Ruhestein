/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (10) 8/8 Sea Giant; Costs (1) less for each other minion on the battlefield.

describe('SeaGiant614', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Sea Giant'
                ],
            }
        });

        g.play(g.hand(0, 'Sea Giant'), 0, '{}');

        // TODO
    });

});
