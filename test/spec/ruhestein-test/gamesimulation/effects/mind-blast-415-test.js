/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Mind Blast; Deal 5 damage to the enemy hero.

describe('MindBlast415', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mind Blast'
                ],
            }
        });

        g.play(g.hand(0, 'Mind Blast'), 0, '{}');

        // TODO
    });

});
