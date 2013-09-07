/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 4/4 Ogre Magi; Spell Power +1

describe('OgreMagi659', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ogre Magi'
                ],
            }
        });

        g.play(g.hand(0, 'Ogre Magi'), 0, '{}');

        // TODO
    });

});
