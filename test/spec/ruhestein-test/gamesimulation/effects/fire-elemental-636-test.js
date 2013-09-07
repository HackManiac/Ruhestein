/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 6/5 Fire Elemental; Battlecry: Deal 3 damage.

describe('FireElemental636', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Fire Elemental'
                ],
            }
        });

        g.play(g.hand(0, 'Fire Elemental'), 0, '{}');

        // TODO
    });

});
