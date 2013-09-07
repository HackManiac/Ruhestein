/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Feral Spirit; Summon two 2/3 Spirit Wolves with Taunt. Overload: (2)

describe('FeralSpirit214', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Feral Spirit'
                ],
            }
        });

        g.play(g.hand(0, 'Feral Spirit'), 0, '{}');

        // TODO
    });

});
