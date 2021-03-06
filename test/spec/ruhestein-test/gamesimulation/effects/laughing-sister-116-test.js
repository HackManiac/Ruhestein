/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 3/5 Laughing Sister; Can't be targeted by Spells or Hero Powers.

describe('LaughingSister116', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Laughing Sister'
                ],
            }
        });

        g.play(g.hand(0, 'Laughing Sister'), 0, '{}');

        // TODO
    });

});
