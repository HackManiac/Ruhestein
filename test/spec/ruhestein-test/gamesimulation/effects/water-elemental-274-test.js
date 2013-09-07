/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 3/6 Water Elemental; Freeze any character that Water Elemental damages.

describe('WaterElemental274', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Water Elemental'
                ],
            }
        });

        g.play(g.hand(0, 'Water Elemental'), 0, '{}');

        // TODO
    });

});
