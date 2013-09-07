/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (9) 4/12 Ysera; At the end of your turn, draw a Dream Card.

describe('Ysera495', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ysera'
                ],
            }
        });

        g.play(g.hand(0, 'Ysera'), 0, '{}');

        // TODO
    });

});
