/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) NOOOOOOOOOOOO; Somehow, the card you USED to have has been deleted.  Here, have this one instead!

describe('NOOOOOOOOOOOO687', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 NOOOOOOOOOOOO'
                ],
            }
        });

        g.play(g.hand(0, 'NOOOOOOOOOOOO'), 0, '{}');

        // TODO
    });

});
