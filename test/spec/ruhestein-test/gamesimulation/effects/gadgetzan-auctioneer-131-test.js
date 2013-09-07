/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 4/4 Gadgetzan Auctioneer; Whenever you cast a spell, draw a card.

describe('GadgetzanAuctioneer131', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Gadgetzan Auctioneer'
                ],
            }
        });

        g.play(g.hand(0, 'Gadgetzan Auctioneer'), 0, '{}');

        // TODO
    });

});
