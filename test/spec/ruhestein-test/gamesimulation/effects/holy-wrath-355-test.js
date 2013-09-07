/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Holy Wrath; Draw a card and deal damage equal to its cost.

describe('HolyWrath355', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Holy Wrath'
                ],
            }
        });

        g.play(g.hand(0, 'Holy Wrath'), 0, '{}');

        // TODO
    });

});
