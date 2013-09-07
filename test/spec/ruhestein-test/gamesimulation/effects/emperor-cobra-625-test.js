/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/3 Emperor Cobra; Destroy any minion damaged by this minion.

describe('EmperorCobra625', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Emperor Cobra'
                ],
            }
        });

        g.play(g.hand(0, 'Emperor Cobra'), 0, '{}');

        // TODO
    });

});
