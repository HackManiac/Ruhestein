/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/1 Bloodmage Thalnos; Spell Power +1. Deathrattle: Draw a card.

describe('BloodmageThalnos525', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Bloodmage Thalnos'
                ],
            }
        });

        g.play(g.hand(0, 'Bloodmage Thalnos'), 0, '{}');

        // TODO
    });

});
