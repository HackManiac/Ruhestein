/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (0) 0/0 Festering Pestilence; Debug text

describe('FesteringPestilence683', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Festering Pestilence'
                ],
            }
        });

        g.play(g.hand(0, 'Festering Pestilence'), 0, '{}');

        // TODO
    });

});
