/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Crazed Alchemist; Battlecry: Swap the Attack and Health of a minion.

describe('CrazedAlchemist612', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Crazed Alchemist'
                ],
            }
        });

        g.play(g.hand(0, 'Crazed Alchemist'), 0, '{}');

        // TODO
    });

});
