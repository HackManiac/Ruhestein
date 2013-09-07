/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (7) 5/5 Ancient of War; Choose One - Ancient of War gets +5 Health and Taunt; or +5 Attack.

describe('AncientOfWar242', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ancient of War'
                ],
            }
        });

        g.play(g.hand(0, 'Ancient of War'), 0, '{}');

        // TODO
    });

});
