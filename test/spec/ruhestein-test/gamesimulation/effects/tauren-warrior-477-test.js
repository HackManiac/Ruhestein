/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/3 Tauren Warrior; Taunt. Enrage: +3 Attack

describe('TaurenWarrior477', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Tauren Warrior'
                ],
            }
        });

        g.play(g.hand(0, 'Tauren Warrior'), 0, '{}');

        // TODO
    });

});
