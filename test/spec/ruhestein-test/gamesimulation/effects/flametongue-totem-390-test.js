/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 0/3 Flametongue Totem; Adjacent minions have +2 Attack.

describe('FlametongueTotem390', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Flametongue Totem'
                ],
            }
        });

        g.play(g.hand(0, 'Flametongue Totem'), 0, '{}');

        // TODO
    });

});