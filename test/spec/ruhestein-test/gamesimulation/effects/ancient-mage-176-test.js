/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 2/5 Ancient Mage; Battlecry: Give adjacent minions Spell Power +1.

describe('AncientMage176', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ancient Mage'
                ],
            }
        });

        g.play(g.hand(0, 'Ancient Mage'), 0, '{}');

        // TODO
    });

});
