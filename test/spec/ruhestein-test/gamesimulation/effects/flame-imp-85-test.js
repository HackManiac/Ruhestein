/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 3/2 Flame Imp; Battlecry: Deal 2 damage to your hero.

describe('FlameImp85', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Flame Imp'
                ],
            }
        });

        g.play(g.hand(0, 'Flame Imp'), 0, '{}');

        // TODO
    });

});
