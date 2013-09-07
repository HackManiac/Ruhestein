/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 1/4 Frothing Berserker; Whenever a minion takes damage, gain +1 Attack.

describe('FrothingBerserker69', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Frothing Berserker'
                ],
            }
        });

        g.play(g.hand(0, 'Frothing Berserker'), 0, '{}');

        // TODO
    });

});
