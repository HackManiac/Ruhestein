/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 6/5 Lord of the Arena; Taunt

describe('LordOfTheArena414', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Lord of the Arena'
                ],
            }
        });

        g.play(g.hand(0, 'Lord of the Arena'), 0, '{}');

        // TODO
    });

});
