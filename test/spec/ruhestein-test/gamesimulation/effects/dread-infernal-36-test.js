/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 6/6 Dread Infernal; Battlecry: Deal 1 damage to ALL other characters.

describe('DreadInfernal36', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Dread Infernal'
                ],
            }
        });

        g.play(g.hand(0, 'Dread Infernal'), 0, '{}');

        // TODO
    });

});
