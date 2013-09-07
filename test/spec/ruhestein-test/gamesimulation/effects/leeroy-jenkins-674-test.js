/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 6/2 Leeroy Jenkins; Charge. Battlecry: Summon two 1/1 Whelps for your opponent.

describe('LeeroyJenkins674', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Leeroy Jenkins'
                ],
            }
        });

        g.play(g.hand(0, 'Leeroy Jenkins'), 0, '{}');

        // TODO
    });

});
