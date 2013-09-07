/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Earth Shock; Silence a minion, then deal 1 damage to it.

describe('EarthShock77', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Earth Shock'
                ],
            }
        });

        g.play(g.hand(0, 'Earth Shock'), 0, '{}');

        // TODO
    });

});
