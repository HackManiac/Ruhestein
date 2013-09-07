/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Mind Shatter; Hero Power  Deal 3 damage.

describe('MindShatter229', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mind Shatter'
                ],
            }
        });

        g.play(g.hand(0, 'Mind Shatter'), 0, '{}');

        // TODO
    });

});
