/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (4) Hammer of Wrath; Deal 3 damage.  Draw a card.

describe('HammerOfWrath350', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Hammer of Wrath'
                ],
            }
        });

        g.play(g.hand(0, 'Hammer of Wrath'), 0, '{}');

        // TODO
    });

});
