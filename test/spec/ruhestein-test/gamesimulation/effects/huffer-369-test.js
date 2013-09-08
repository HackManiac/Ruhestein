/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (3) 4/2 Huffer; Charge

describe('Huffer369', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Animal Companion'
                ],
            }
        });

        g.gm.predictRoll(3);
        g.play(g.hand(0, 'Animal Companion'), null, '{Dead}');
        g.battlefield(0, '4/2 Huffer {Charge}');
    });

});
