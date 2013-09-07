/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Eviscerate; Deal 2 damage. Combo: Deal 4 damage instead.

describe('Eviscerate382', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Eviscerate'
                ],
            }
        });

        g.play(g.hand(0, 'Eviscerate'), 0, '{}');

        // TODO
    });

});
