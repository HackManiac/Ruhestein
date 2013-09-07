/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Life Tap; Hero Power  Draw a card and take 2 damage.

describe('LifeTap20', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Life Tap'
                ],
            }
        });

        g.play(g.hand(0, 'Life Tap'), 0, '{}');

        // TODO
    });

});
