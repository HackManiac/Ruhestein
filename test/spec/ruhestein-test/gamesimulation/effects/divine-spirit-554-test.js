/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Divine Spirit; Double a minion's Health.

describe('DivineSpirit554', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Divine Spirit'
                ],
            }
        });

        g.play(g.hand(0, 'Divine Spirit'), 0, '{}');

        // TODO
    });

});
