/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From weapon card: (3) 3/2 Eaglehorn Bow; Whenever a Secret is revealed, gain +1 Durability.

describe('EaglehornBow363', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Eaglehorn Bow'
                ],
            }
        });

        g.play(g.hand(0, 'Eaglehorn Bow'), 0, '{}');

        // TODO
    });

});
