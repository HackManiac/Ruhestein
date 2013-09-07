/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/3 Mana Wyrm; Whenever you cast a spell, gain +1 Attack.

describe('ManaWyrm263', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mana Wyrm'
                ],
            }
        });

        g.play(g.hand(0, 'Mana Wyrm'), 0, '{}');

        // TODO
    });

});
