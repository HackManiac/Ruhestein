/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Holy Nova; Deal 2 damage to all enemies.  Restore #2 Health to all  friendly characters.

describe('HolyNova671', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Holy Nova'
                ],
            }
        });

        g.play(g.hand(0, 'Holy Nova'), 0, '{}');

        // TODO
    });

});
