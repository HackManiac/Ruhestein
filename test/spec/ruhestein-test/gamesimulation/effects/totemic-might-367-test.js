/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Totemic Might; Give your Totems +2 Health.

describe('TotemicMight367', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Totemic Might'
                ],
            }
        });

        g.play(g.hand(0, 'Totemic Might'), 0, '{}');

        // TODO
    });

});
