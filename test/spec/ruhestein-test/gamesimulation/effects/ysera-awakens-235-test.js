/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Ysera Awakens; Deal 5 damage to all characters except Ysera.

describe('YseraAwakens235', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ysera Awakens'
                ],
            }
        });

        g.play(g.hand(0, 'Ysera Awakens'), 0, '{}');

        // TODO
    });

});
