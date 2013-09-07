/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Worthless Imp; You are out of demons! At least there are always imps...

describe('WorthlessImp230', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Worthless Imp'
                ],
            }
        });

        g.play(g.hand(0, 'Worthless Imp'), 0, '{}');

        // TODO
    });

});
