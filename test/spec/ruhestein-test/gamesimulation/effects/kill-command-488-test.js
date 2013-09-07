/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Kill Command; Deal 3 damage.  If you have a Beast, deal 5 damage instead.

describe('KillCommand488', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Kill Command'
                ],
            }
        });

        g.play(g.hand(0, 'Kill Command'), 0, '{}');

        // TODO
    });

});
