/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (6) 5/4 Priestess of Elune; Battlecry: Restore 4 Health to your hero.

describe('PriestessOfElune138', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Priestess of Elune'
                ],
            }
        });

        g.play(g.hand(0, 'Priestess of Elune'), 0, '{}');

        // TODO
    });

});
