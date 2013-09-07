/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 3/3 Windspeaker; Battlecry: Give a friendly minion Windfury.

describe('Windspeaker151', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Windspeaker'
                ],
            }
        });

        g.play(g.hand(0, 'Windspeaker'), 0, '{}');

        // TODO
    });

});
