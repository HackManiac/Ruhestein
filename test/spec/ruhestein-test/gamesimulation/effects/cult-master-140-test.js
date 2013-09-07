/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 4/2 Cult Master; Whenever one of your other minions dies, draw a card.

describe('CultMaster140', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Cult Master'
                ],
            }
        });

        g.play(g.hand(0, 'Cult Master'), 0, '{}');

        // TODO
    });

});
