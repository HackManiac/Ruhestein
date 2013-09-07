/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 1/4 Silverback Patriarch; Taunt

describe('SilverbackPatriarch611', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Silverback Patriarch'
                ],
            }
        });

        g.play(g.hand(0, 'Silverback Patriarch'), 0, '{}');

        // TODO
    });

});
