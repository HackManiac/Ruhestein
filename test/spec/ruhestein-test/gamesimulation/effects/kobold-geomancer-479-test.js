/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Kobold Geomancer; Spell Power +1

describe('KoboldGeomancer479', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Kobold Geomancer'
                ],
            }
        });

        g.play(g.hand(0, 'Kobold Geomancer'), 0, '{}');

        // TODO
    });

});
