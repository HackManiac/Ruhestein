/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Fan of Knives; Deal 1 damage to all enemy minions. Draw a card.

describe('FanOfKnives378', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Fan of Knives'
                ],
            }
        });

        g.play(g.hand(0, 'Fan of Knives'), 0, '{}');

        // TODO
    });

});
