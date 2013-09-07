/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Power Overwhelming; Give a friendly minion +4/+4 until end of turn. Then, it dies. Horribly.

describe('PowerOverwhelming170', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Power Overwhelming'
                ],
            }
        });

        g.play(g.hand(0, 'Power Overwhelming'), 0, '{}');

        // TODO
    });

});
