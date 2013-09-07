/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Shan'do's Lesson; Summon two 2/2 Treants with Taunt.

describe('ShandosLesson159', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shan\'do\'s Lesson'
                ],
            }
        });

        g.play(g.hand(0, 'Shan\'do\'s Lesson'), 0, '{}');

        // TODO
    });

});
