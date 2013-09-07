/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Angry Chicken; Enrage: +5 Attack.

describe('AngryChicken57', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Angry Chicken'
                ],
            }
        });

        g.play(g.hand(0, 'Angry Chicken'), 0, '{}');

        // TODO
    });

});
