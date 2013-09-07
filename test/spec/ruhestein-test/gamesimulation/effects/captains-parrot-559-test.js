/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/2 Captain's Parrot; Battlecry: Put a random Pirate from your deck into your hand.

describe('CaptainsParrot559', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Captain\'s Parrot'
                ],
            }
        });

        g.play(g.hand(0, 'Captain\'s Parrot'), 0, '{}');

        // TODO
    });

});
