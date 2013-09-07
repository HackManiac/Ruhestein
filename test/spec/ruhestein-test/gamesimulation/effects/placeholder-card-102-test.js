/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (9) 6/8 Placeholder Card; Battlecry: Someone remembers to publish this card.

describe('PlaceholderCard102', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Placeholder Card'
                ],
            }
        });

        g.play(g.hand(0, 'Placeholder Card'), 0, '{}');

        // TODO
    });

});
