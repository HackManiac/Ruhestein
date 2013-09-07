/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/2 Lightwarden; Whenever a character is healed, gain +1 Attack.

describe('Lightwarden436', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Lightwarden'
                ],
            }
        });

        g.play(g.hand(0, 'Lightwarden'), 0, '{}');

        // TODO
    });

});
