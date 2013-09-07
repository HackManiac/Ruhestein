/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 2/4 Dalaran Mage; Spell Power +1

describe('DalaranMage388', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Dalaran Mage'
                ],
            }
        });

        g.play(g.hand(0, 'Dalaran Mage'), 0, '{}');

        // TODO
    });

});
