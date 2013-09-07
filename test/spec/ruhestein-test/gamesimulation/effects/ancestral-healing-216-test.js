/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Ancestral Healing; Restore a minion to full Health and give it Taunt.

describe('AncestralHealing216', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ancestral Healing'
                ],
            }
        });

        g.play(g.hand(0, 'Ancestral Healing'), 0, '{}');

        // TODO
    });

});
