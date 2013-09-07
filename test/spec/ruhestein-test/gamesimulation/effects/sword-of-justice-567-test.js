/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From weapon card: (3) 1/5 Sword of Justice; Whenever you summon a minion, give it +1/+1 and this loses 1 Durability.

describe('SwordOfJustice567', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Sword of Justice'
                ],
            }
        });

        g.play(g.hand(0, 'Sword of Justice'), 0, '{}');

        // TODO
    });

});
