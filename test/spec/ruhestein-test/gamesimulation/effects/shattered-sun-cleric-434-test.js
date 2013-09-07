/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Shattered Sun Cleric; Battlecry: Give a friendly minion +1/+1.

describe('ShatteredSunCleric434', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shattered Sun Cleric'
                ],
            }
        });

        g.play(g.hand(0, 'Shattered Sun Cleric'), 0, '{}');

        // TODO
    });

});
