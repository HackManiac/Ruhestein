/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 3/3 Ethereal Arcanist; If you control a Secret at the end of your turn, gain +2/+2.

describe('EtherealArcanist125', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ethereal Arcanist'
                ],
            }
        });

        g.play(g.hand(0, 'Ethereal Arcanist'), 0, '{}');

        // TODO
    });

});
