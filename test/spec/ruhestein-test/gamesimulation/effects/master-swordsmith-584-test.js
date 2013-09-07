/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/3 Master Swordsmith; At the end of your turn, give another random friendly minion +1 Attack.

describe('MasterSwordsmith584', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Master Swordsmith'
                ],
            }
        });

        g.play(g.hand(0, 'Master Swordsmith'), 0, '{}');

        // TODO
    });

});
