/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/2 Questing Adventurer; Whenever you play a card, gain +1/+1.

describe('QuestingAdventurer157', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Questing Adventurer'
                ],
            }
        });

        g.play(g.hand(0, 'Questing Adventurer'), 0, '{}');

        // TODO
    });

});
