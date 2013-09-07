/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 3/1 Dust Devil; Windfury. Overload: (2)

describe('DustDevil129', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Dust Devil'
                ],
            }
        });

        g.play(g.hand(0, 'Dust Devil'), 0, '{}');

        // TODO
    });

});
