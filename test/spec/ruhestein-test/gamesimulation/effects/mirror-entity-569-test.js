/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Mirror Entity; Secret: When your opponent plays a minion, summon a copy of it.

describe('MirrorEntity569', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mirror Entity'
                ],
            }
        });

        g.play(g.hand(0, 'Mirror Entity'), 0, '{}');

        // TODO
    });

});
