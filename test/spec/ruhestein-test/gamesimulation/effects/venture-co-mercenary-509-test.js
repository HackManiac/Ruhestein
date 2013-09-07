/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 7/6 Venture Co. Mercenary; Your minions cost (3) more.

describe('VentureCoMercenary509', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Venture Co. Mercenary'
                ],
            }
        });

        g.play(g.hand(0, 'Venture Co. Mercenary'), 0, '{}');

        // TODO
    });

});
