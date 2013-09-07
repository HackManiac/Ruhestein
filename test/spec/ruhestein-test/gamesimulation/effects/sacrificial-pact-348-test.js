/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Sacrificial Pact; Destroy a Demon. Restore #5 Health to your hero.

describe('SacrificialPact348', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Sacrificial Pact'
                ],
            }
        });

        g.play(g.hand(0, 'Sacrificial Pact'), 0, '{}');

        // TODO
    });

});
