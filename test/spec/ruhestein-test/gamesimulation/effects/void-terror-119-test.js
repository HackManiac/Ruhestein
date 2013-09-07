/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Void Terror; Battlecry: Destroy the minions on either side of this minion and gain their Attack and Health.

describe('VoidTerror119', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Void Terror'
                ],
            }
        });

        g.play(g.hand(0, 'Void Terror'), 0, '{}');

        // TODO
    });

});
