/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 2/4 Gnomish Inventor; Battlecry: Draw a card.

describe('GnomishInventor246', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Gnomish Inventor'
                ],
            }
        });

        g.play(g.hand(0, 'Gnomish Inventor'), 0, '{}');

        // TODO
    });

});
