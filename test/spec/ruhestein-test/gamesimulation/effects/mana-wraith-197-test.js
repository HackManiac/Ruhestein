/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/3 Mana Wraith; ALL minions cost (1) more.

describe('ManaWraith197', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mana Wraith'
                ],
            }
        });

        g.play(g.hand(0, 'Mana Wraith'), 0, '{}');

        // TODO
    });

});
