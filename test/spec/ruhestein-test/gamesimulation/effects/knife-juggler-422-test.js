/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 3/2 Knife Juggler; After you summon a minion, deal 1 damage to a random enemy.

describe('KnifeJuggler422', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Knife Juggler'
                ],
            }
        });

        g.play(g.hand(0, 'Knife Juggler'), 0, '{}');

        // TODO
    });

});
