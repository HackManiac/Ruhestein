/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/3 Northshire Cleric; Whenever a minion is healed, draw a card.

describe('NorthshireCleric600', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Northshire Cleric'
                ],
            }
        });

        g.play(g.hand(0, 'Northshire Cleric'), 0, '{}');

        // TODO
    });

});
