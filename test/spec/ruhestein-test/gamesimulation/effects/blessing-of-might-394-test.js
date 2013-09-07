/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Blessing of Might; Give a minion +3 Attack.

describe('BlessingOfMight394', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Blessing of Might'
                ],
            }
        });

        g.play(g.hand(0, 'Blessing of Might'), 0, '{}');

        // TODO
    });

});
