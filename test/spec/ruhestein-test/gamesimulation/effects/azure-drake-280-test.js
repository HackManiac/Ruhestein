/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/4 Azure Drake; Spell Power +1. Battlecry: Draw a card.

describe('AzureDrake280', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Azure Drake'
                ],
            }
        });

        g.play(g.hand(0, 'Azure Drake'), 0, '{}');

        // TODO
    });

});
