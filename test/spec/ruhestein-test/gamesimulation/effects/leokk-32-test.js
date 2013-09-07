/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/4 Leokk; Other friendly minions have +1 Attack.

describe('Leokk32', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Leokk'
                ],
            }
        });

        g.play(g.hand(0, 'Leokk'), 0, '{}');

        // TODO
    });

});
