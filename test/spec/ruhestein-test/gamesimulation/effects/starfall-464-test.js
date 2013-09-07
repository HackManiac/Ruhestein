/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Starfall; Choose One - Deal 5 damage to an enemy; or 2 damage to all of them.

describe('Starfall464', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Starfall'
                ],
            }
        });

        g.play(g.hand(0, 'Starfall'), 0, '{}');

        // TODO
    });

});
