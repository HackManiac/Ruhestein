/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 5/2 Reckless Rocketeer; Charge

describe('RecklessRocketeer560', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Reckless Rocketeer'
                ],
            }
        });

        g.play(g.hand(0, 'Reckless Rocketeer'), 0, '{}');

        // TODO
    });

});
