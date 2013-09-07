/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Redemption; Secret: When one of your minions dies, return it to life with 1 Health.

describe('Redemption657', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Redemption'
                ],
            }
        });

        g.play(g.hand(0, 'Redemption'), 0, '{}');

        // TODO
    });

});
