/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From weapon card: (5) 2/8 Doomhammer; Windfury, Overload: (2)

describe('Doomhammer172', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Doomhammer'
                ],
            }
        });

        g.play(g.hand(0, 'Doomhammer'), 0, '{}');

        // TODO
    });

});
