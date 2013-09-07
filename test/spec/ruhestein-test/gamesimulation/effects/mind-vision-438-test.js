/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Mind Vision; Put a copy of a random card in your opponent's hand into your hand.

describe('MindVision438', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mind Vision'
                ],
            }
        });

        g.play(g.hand(0, 'Mind Vision'), 0, '{}');

        // TODO
    });

});
