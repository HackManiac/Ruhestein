/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From weapon card: (7) 5/2 Gladiator's Longbow; Your hero is Immune while attacking.

describe('GladiatorsLongbow278', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Gladiator\'s Longbow'
                ],
            }
        });

        g.play(g.hand(0, 'Gladiator\'s Longbow'), 0, '{}');

        // TODO
    });

});
