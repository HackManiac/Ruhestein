/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Aldor Peacekeeper; Battlecry: Change an enemy minion's Attack to 1.

describe('AldorPeacekeeper23', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Aldor Peacekeeper'
                ],
            }
        });

        g.play(g.hand(0, 'Aldor Peacekeeper'), 0, '{}');

        // TODO
    });

});
