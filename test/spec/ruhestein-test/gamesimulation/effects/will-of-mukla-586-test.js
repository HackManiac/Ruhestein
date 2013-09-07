/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Will of Mukla; Restore 8 Health.

describe('WillOfMukla586', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Will of Mukla'
                ],
            }
        });

        g.play(g.hand(0, 'Will of Mukla'), 0, '{}');

        // TODO
    });

});
