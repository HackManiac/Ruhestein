/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/4 Unbound Elemental; Whenever you play a card with Overload, gain +1/+1.

describe('UnboundElemental51', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Unbound Elemental'
                ],
            }
        });

        g.play(g.hand(0, 'Unbound Elemental'), 0, '{}');

        // TODO
    });

});
