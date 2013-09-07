/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Fireblast; Hero Power  Deal 1 damage.

describe('Fireblast677', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Fireblast'
                ],
            }
        });

        g.play(g.hand(0, 'Fireblast'), 0, '{}');

        // TODO
    });

});
