/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (7) 5/7 Archmage Antonidas; Whenever you cast a spell, put a 'Fireball' spell into your hand.

describe('ArchmageAntonidas220', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Archmage Antonidas'
                ],
            }
        });

        g.play(g.hand(0, 'Archmage Antonidas'), 0, '{}');

        // TODO
    });

});
