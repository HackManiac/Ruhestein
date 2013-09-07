/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Steady Shot; Hero Power  Deal 2 damage to the enemy hero.

describe('SteadyShot481', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Steady Shot'
                ],
            }
        });

        g.play(g.hand(0, 'Steady Shot'), 0, '{}');

        // TODO
    });

});
