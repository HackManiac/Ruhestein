/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Leader of the Pack; Give all of your minions +1/+1.

describe('LeaderOfThePack204', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Leader of the Pack'
                ],
            }
        });

        g.play(g.hand(0, 'Leader of the Pack'), 0, '{}');

        // TODO
    });

});
