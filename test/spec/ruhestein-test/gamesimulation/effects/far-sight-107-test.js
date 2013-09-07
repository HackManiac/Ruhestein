/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Far Sight; Draw a card. That card costs (3) less.

describe('FarSight107', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Far Sight'
                ],
            }
        });

        g.play(g.hand(0, 'Far Sight'), 0, '{}');

        // TODO
    });

});
