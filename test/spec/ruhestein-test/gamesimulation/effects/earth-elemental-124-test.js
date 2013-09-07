/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 7/8 Earth Elemental; Taunt. Overload: (3)

describe('EarthElemental124', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Earth Elemental'
                ],
            }
        });

        g.play(g.hand(0, 'Earth Elemental'), 0, '{}');

        // TODO
    });

});
