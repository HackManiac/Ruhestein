/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Hand of Protection; Give a minion Divine Shield.

describe('HandOfProtection499', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Hand of Protection'
                ],
            }
        });

        g.play(g.hand(0, 'Hand of Protection'), 0, '{}');

        // TODO
    });

});
