/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Shadow Word: Pain; Destroy a minion with 3 or less Attack.

describe('ShadowWordPain315', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Shadow Word: Pain'
                ],
            }
        });

        g.play(g.hand(0, 'Shadow Word: Pain'), 0, '{}');

        // TODO
    });

});
