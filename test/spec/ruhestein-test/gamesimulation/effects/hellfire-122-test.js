/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Hellfire; Deal 3 damage to ALL characters.

describe('Hellfire122', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Hellfire'
                ],
            }
        });

        g.play(g.hand(0, 'Hellfire'), 0, '{}');

        // TODO
    });

});
