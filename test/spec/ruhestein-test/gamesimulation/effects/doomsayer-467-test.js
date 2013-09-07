/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 0/7 Doomsayer; At the start of your turn, destroy ALL minions.

describe('Doomsayer467', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Doomsayer'
                ],
            }
        });

        g.play(g.hand(0, 'Doomsayer'), 0, '{}');

        // TODO
    });

});
