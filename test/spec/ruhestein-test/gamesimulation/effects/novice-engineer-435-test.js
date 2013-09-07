/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/2 Novice Engineer; Battlecry: Draw a card.

describe('NoviceEngineer435', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Novice Engineer'
                ],
            }
        });

        g.play(g.hand(0, 'Novice Engineer'), 0, '{}');

        // TODO
    });

});
