/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Circle of Healing; Restore #4 Health to ALL minions.

describe('CircleOfHealing38', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Circle of Healing'
                ],
            }
        });

        g.play(g.hand(0, 'Circle of Healing'), 0, '{}');

        // TODO
    });

});
