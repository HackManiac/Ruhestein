/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 2/4 Keeper of the Grove; Choose One - Deal 2 damage; or Silence a minion.

describe('KeeperOfTheGrove459', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Keeper of the Grove'
                ],
            }
        });

        g.play(g.hand(0, 'Keeper of the Grove'), 0, '{}');

        // TODO
    });

});
