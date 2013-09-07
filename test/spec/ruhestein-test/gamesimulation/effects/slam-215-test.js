/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Slam; Deal 2 damage to a minion.  If it survives, draw a card.

describe('Slam215', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Slam'
                ],
            }
        });

        g.play(g.hand(0, 'Slam'), 0, '{}');

        // TODO
    });

});
