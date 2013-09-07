/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 0/2 Wrath of Air Totem; Spell Power +1

describe('WrathOfAirTotem365', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wrath of Air Totem'
                ],
            }
        });

        g.play(g.hand(0, 'Wrath of Air Totem'), 0, '{}');

        // TODO
    });

});
