/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Legacy of the Emperor; Give your minions +2/+2. (+2 Attack/+2 Health)

describe('LegacyOfTheEmperor441', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Legacy of the Emperor'
                ],
            }
        });

        g.play(g.hand(0, 'Legacy of the Emperor'), 0, '{}');

        // TODO
    });

});
