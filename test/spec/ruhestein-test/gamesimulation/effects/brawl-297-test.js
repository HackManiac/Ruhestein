/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (5) Brawl; Destroy all minions except one.  (chosen randomly)

describe('Brawl297', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Brawl'
                ],
            }
        });

        g.play(g.hand(0, 'Brawl'), 0, '{}');

        // TODO
    });

});
