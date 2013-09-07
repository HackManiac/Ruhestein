/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 2/4 Dragonling Mechanic; Battlecry: Summon a 2/1 Mechanical Dragonling.

describe('DragonlingMechanic472', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Dragonling Mechanic'
                ],
            }
        });

        g.play(g.hand(0, 'Dragonling Mechanic'), 0, '{}');

        // TODO
    });

});
