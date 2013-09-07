/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Mass Dispel; Silence all enemy minions. Draw a card.

describe('MassDispel249', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mass Dispel'
                ],
            }
        });

        g.play(g.hand(0, 'Mass Dispel'), 0, '{}');

        // TODO
    });

});
