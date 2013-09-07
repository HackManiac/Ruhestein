/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 2/1 Southsea Deckhand; Has Charge while you have a weapon equipped.

describe('SouthseaDeckhand103', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Southsea Deckhand'
                ],
            }
        });

        g.play(g.hand(0, 'Southsea Deckhand'), 0, '{}');

        // TODO
    });

});
