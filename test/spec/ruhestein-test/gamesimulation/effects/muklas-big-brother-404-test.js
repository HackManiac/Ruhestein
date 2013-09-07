/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 10/10 Mukla's Big Brother; So strong! And only 6 Mana?!

describe('MuklasBigBrother404', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mukla\'s Big Brother'
                ],
            }
        });

        g.play(g.hand(0, 'Mukla\'s Big Brother'), 0, '{}');

        // TODO
    });

});
