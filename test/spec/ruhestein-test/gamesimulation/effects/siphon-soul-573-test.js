/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (6) Siphon Soul; Destroy a minion. Restore #3 Health to your hero.

describe('SiphonSoul573', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Siphon Soul'
                ],
            }
        });

        g.play(g.hand(0, 'Siphon Soul'), 0, '{}');

        // TODO
    });

});
