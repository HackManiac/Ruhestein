/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Mindgames; Put a copy of a random minion from your opponent's deck into the battlefield.

describe('Mindgames301', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mindgames'
                ],
            }
        });

        g.play(g.hand(0, 'Mindgames'), 0, '{}');

        // TODO
    });

});
