/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (6) Avenging Wrath; Shoot 8 missiles at random enemies for 1 damage each.

describe('AvengingWrath142', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Avenging Wrath'
                ],
            }
        });

        g.play(g.hand(0, 'Avenging Wrath'), 0, '{}');

        // TODO
    });

});
