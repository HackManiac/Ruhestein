/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Ice Barrier; Secret: As soon as your hero is attacked, gain 8 Armor.

describe('IceBarrier672', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ice Barrier'
                ],
            }
        });

        g.play(g.hand(0, 'Ice Barrier'), 0, '{}');

        // TODO
    });

});
