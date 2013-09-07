/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (0) 0/1 Mirror Image; Taunt

describe('MirrorImage650', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Mirror Image'
                ],
            }
        });

        g.play(g.hand(0, 'Mirror Image'), 0, '{}');

        // TODO
    });

});
