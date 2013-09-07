/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Sense Demons; Put 2 random Demons from your deck into your hand.

describe('SenseDemons327', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Sense Demons'
                ],
            }
        });

        g.play(g.hand(0, 'Sense Demons'), 0, '{}');

        // TODO
    });

});
