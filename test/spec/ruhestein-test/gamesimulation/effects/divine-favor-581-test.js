/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Divine Favor; Draw cards until you have as many in hand as your opponent.

describe('DivineFavor581', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Divine Favor'
                ],
            }
        });

        g.play(g.hand(0, 'Divine Favor'), 0, '{}');

        // TODO
    });

});
