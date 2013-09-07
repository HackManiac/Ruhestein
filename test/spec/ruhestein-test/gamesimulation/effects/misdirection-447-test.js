/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Misdirection; Secret: When a character attacks your hero, instead he attacks another random character.

describe('Misdirection447', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Misdirection'
                ],
            }
        });

        g.play(g.hand(0, 'Misdirection'), 0, '{}');

        // TODO
    });

});
