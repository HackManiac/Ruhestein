/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 2/1 Voodoo Doctor; Battlecry: Restore 2 Health.

describe('VoodooDoctor410', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Voodoo Doctor'
                ],
            }
        });

        g.play(g.hand(0, 'Voodoo Doctor'), 0, '{}');

        // TODO
    });

});
