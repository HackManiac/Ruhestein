/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Snipe; Secret: When your opponent plays a minion, deal 4 damage to it.

describe('Snipe553', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Snipe'
                ],
            }
        });

        g.play(g.hand(0, 'Snipe'), 0, '{}');

        // TODO
    });

});
