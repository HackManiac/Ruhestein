/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Arcane Intellect; Draw 2 cards.

describe('ArcaneIntellect489', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Arcane Intellect'
                ],
            }
        });

        g.play(g.hand(0, 'Arcane Intellect'), 0, '{}');

        // TODO
    });

});
