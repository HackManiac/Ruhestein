/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Unleash the Hounds; Give your Beasts +1 Attack and Charge.

describe('UnleashTheHounds317', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Unleash the Hounds'
                ],
            }
        });

        g.play(g.hand(0, 'Unleash the Hounds'), 0, '{}');

        // TODO
    });

});
