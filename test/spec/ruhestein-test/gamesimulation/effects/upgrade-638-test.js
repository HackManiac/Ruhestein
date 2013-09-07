/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Upgrade!; If you have a weapon, give it +1/+1.  Otherwise equip a 1/3 weapon.

describe('Upgrade638', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Upgrade!'
                ],
            }
        });

        g.play(g.hand(0, 'Upgrade!'), 0, '{}');

        // TODO
    });

});
