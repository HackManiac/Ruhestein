/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Wrath; Choose One - Deal 3 damage; or Deal 1 damage and draw a card.

describe('Wrath633', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Wrath'
                ],
            }
        });

        g.play(g.hand(0, 'Wrath'), 0, '{}');

        // TODO
    });

});
