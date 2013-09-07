/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/3 Amani Berserker; Enrage: +3 Attack

describe('AmaniBerserker641', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Amani Berserker'
                ],
            }
        });

        g.play(g.hand(0, 'Amani Berserker'), 0, '{}');

        // TODO
    });

});
