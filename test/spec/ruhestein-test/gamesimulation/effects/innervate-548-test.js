/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Innervate; Gain 2 Mana Crystals this turn only.

describe('Innervate548', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Innervate'
                ],
            }
        });

        g.play(g.hand(0, 'Innervate'), 0, '{}');

        // TODO
    });

});
