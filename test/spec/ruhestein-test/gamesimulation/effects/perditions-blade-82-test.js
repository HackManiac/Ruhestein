/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From weapon card: (3) 2/2 Perdition's Blade; Battlecry: Deal 1 damage. Combo: Deal 2 instead.

describe('PerditionsBlade82', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Perdition\'s Blade'
                ],
            }
        });

        g.play(g.hand(0, 'Perdition\'s Blade'), 0, '{}');

        // TODO
    });

});
