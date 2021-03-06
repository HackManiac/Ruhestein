/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From weapon card: (7) 7/1 Gorehowl; Attacking a minion costs 1 Attack instead of 1 Durability.

describe('Gorehowl96', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Gorehowl'
                ],
            }
        });

        g.play(g.hand(0, 'Gorehowl'), 0, '{}');

        // TODO
    });

});
