/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (5) 5/5 Sylvanas Windrunner; Deathrattle: Take control of a random enemy minion.

describe('SylvanasWindrunner33', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Sylvanas Windrunner'
                ],
            }
        });

        g.play(g.hand(0, 'Sylvanas Windrunner'), 0, '{}');

        // TODO
    });

});
