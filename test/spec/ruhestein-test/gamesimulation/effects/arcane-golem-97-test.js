/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 4/2 Arcane Golem; Charge. Battlecry: Give your opponent a Mana Crystal.

describe('ArcaneGolem97', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Arcane Golem'
                ],
            }
        });

        g.play(g.hand(0, 'Arcane Golem'), 0, '{}');

        // TODO
    });

});
