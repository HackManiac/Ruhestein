/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Forked Lightning; Deal 2 damage to 2 random enemy minions. Overload: (2)

describe('ForkedLightning530', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Forked Lightning'
                ],
            }
        });

        g.play(g.hand(0, 'Forked Lightning'), 0, '{}');

        // TODO
    });

});
