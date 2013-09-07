/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (8) 7/7 Gruul; At the end of each turn, gain +1/+1 .

describe('Gruul18', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Gruul'
                ],
            }
        });

        g.play(g.hand(0, 'Gruul'), 0, '{}');

        // TODO
    });

});
