/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/3 Spirit Wolf; Taunt

describe('SpiritWolf451', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Spirit Wolf'
                ],
            }
        });

        g.play(g.hand(0, 'Spirit Wolf'), 0, '{}');

        // TODO
    });

});
