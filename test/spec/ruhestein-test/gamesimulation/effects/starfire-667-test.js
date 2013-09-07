/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (6) Starfire; Deal 5 damage.  Draw a card.

describe('Starfire667', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Starfire'
                ],
            }
        });

        g.play(g.hand(0, 'Starfire'), 0, '{}');

        // TODO
    });

});
