/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/3 Earthen Ring Farseer; Battlecry: Restore 3 Health.

describe('EarthenRingFarseer557', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Earthen Ring Farseer'
                ],
            }
        });

        g.play(g.hand(0, 'Earthen Ring Farseer'), 0, '{}');

        // TODO
    });

});