/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 2/1 Leper Gnome; Deathrattle: Deal 2 damage to the enemy hero.

describe('LeperGnome513', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Leper Gnome'
                ],
            }
        });

        g.play(g.hand(0, 'Leper Gnome'), 0, '{}');

        // TODO
    });

});
