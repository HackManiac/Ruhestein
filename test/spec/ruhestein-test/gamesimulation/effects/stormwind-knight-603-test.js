/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 2/5 Stormwind Knight; Charge

describe('StormwindKnight603', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Stormwind Knight'
                ],
            }
        });

        g.play(g.hand(0, 'Stormwind Knight'), 0, '{}');

        // TODO
    });

});
