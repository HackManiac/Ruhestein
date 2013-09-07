/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 2/7 Gurubashi Berserker; Whenever this minion takes damage, gain +3 Attack.

describe('GurubashiBerserker624', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Gurubashi Berserker'
                ],
            }
        });

        g.play(g.hand(0, 'Gurubashi Berserker'), 0, '{}');

        // TODO
    });

});
