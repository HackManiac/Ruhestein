/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Shadowform; Your Hero Power becomes 'Deal 2 damage'. If already in Shadowform: 3 damage.

describe('Shadowform421', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shadowform'
                ],
            }
        });

        g.play(g.hand(0, 'Shadowform'), 0, '{}');

        // TODO
    });

});
