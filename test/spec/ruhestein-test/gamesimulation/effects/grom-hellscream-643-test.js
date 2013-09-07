/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (8) 4/9 Grom Hellscream; Charge.  Enrage: +6 Attack

describe('GromHellscream643', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Grom Hellscream'
                ],
            }
        });

        g.play(g.hand(0, 'Grom Hellscream'), 0, '{}');

        // TODO
    });

});
