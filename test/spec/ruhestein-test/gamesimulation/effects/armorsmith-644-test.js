/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 1/4 Armorsmith; Whenever a friendly minion takes damage, gain 1 Armor.

describe('Armorsmith644', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Armorsmith'
                ],
            }
        });

        g.play(g.hand(0, 'Armorsmith'), 0, '{}');

        // TODO
    });

});
