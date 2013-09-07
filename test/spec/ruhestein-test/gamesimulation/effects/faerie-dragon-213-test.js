/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 3/2 Faerie Dragon; Can't be targeted by Spells or Hero Powers.

describe('FaerieDragon213', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Faerie Dragon'
                ],
            }
        });

        g.play(g.hand(0, 'Faerie Dragon'), 0, '{}');

        // TODO
    });

});
