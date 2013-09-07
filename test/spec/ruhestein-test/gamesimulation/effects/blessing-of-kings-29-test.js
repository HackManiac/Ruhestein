/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Blessing of Kings; Give a minion +4/+4. (+4 Attack/+4 Health)

describe('BlessingOfKings29', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Blessing of Kings'
                ],
            }
        });

        g.play(g.hand(0, 'Blessing of Kings'), 0, '{}');

        // TODO
    });

});
