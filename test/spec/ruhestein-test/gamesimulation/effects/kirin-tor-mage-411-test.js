/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 4/3 Kirin Tor Mage; Battlecry: The next Secret you play this turn costs (0).

describe('KirinTorMage411', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Kirin Tor Mage'
                ],
            }
        });

        g.play(g.hand(0, 'Kirin Tor Mage'), 0, '{}');

        // TODO
    });

});
