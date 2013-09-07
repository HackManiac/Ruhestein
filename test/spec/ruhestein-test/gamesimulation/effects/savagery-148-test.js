/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Savagery; Deal damage equal to your hero's Attack to all enemy minions.

describe('Savagery148', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Savagery'
                ],
            }
        });

        g.play(g.hand(0, 'Savagery'), 0, '{}');

        // TODO
    });

});
