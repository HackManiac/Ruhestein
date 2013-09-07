/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Adrenaline Rush; Draw a card. Combo: Draw 2 cards instead.

describe('AdrenalineRush180', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Adrenaline Rush'
                ],
            }
        });

        g.play(g.hand(0, 'Adrenaline Rush'), 0, '{}');

        // TODO
    });

});
