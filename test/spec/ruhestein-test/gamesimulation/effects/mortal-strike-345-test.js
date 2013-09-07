/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Mortal Strike; Deal 4 damage.  If your hero has 12 or less Health, deal 6 damage instead.

describe('MortalStrike345', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mortal Strike'
                ],
            }
        });

        g.play(g.hand(0, 'Mortal Strike'), 0, '{}');

        // TODO
    });

});
