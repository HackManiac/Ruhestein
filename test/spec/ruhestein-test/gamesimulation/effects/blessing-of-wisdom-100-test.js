/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (1) Blessing of Wisdom; Choose a minion.  Whenever it attacks, draw a card.

describe('BlessingOfWisdom100', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Blessing of Wisdom'
                ],
            }
        });

        g.play(g.hand(0, 'Blessing of Wisdom'), 0, '{}');

        // TODO
    });

});
