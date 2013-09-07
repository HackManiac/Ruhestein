/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (0) 0/1 Shadow of Nothing; Mindgames whiffed! Your opponent had no minions!

describe('ShadowOfNothing582', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shadow of Nothing'
                ],
            }
        });

        g.play(g.hand(0, 'Shadow of Nothing'), 0, '{}');

        // TODO
    });

});
