/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 5/5 Captain Greenskin; Whenever you attack with your hero, draw a card.

describe('CaptainGreenskin267', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Captain Greenskin'
                ],
            }
        });

        g.play(g.hand(0, 'Captain Greenskin'), 0, '{}');

        // TODO
    });

});
