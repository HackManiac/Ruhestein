/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Transcendence; Until you kill Cho's minions, he can't be attacked.

describe('Transcendence299', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Transcendence'
                ],
            }
        });

        g.play(g.hand(0, 'Transcendence'), 0, '{}');

        // TODO
    });

});
