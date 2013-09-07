/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Cone of Cold; Freeze a minion and the minions next to it, and deal 1 damage to them.

describe('ConeOfCold26', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Cone of Cold'
                ],
            }
        });

        g.play(g.hand(0, 'Cone of Cold'), 0, '{}');

        // TODO
    });

});
