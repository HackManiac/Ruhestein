/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Dire Wolf Alpha; Adjacent minions have +1 Attack.

describe('DireWolfAlpha305', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Dire Wolf Alpha'
                ],
            }
        });

        g.play(g.hand(0, 'Dire Wolf Alpha'), 0, '{}');

        // TODO
    });

});
