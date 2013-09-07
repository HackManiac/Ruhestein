/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Bestial Wrath; Give a Beast +2 Attack and Immune this turn.

describe('BestialWrath304', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Bestial Wrath'
                ],
            }
        });

        g.play(g.hand(0, 'Bestial Wrath'), 0, '{}');

        // TODO
    });

});
