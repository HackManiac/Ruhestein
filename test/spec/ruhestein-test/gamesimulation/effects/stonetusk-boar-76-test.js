/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (1) 1/1 Stonetusk Boar; Charge

describe('StonetuskBoar76', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Stonetusk Boar'
                ],
            }
        });

        g.play(g.hand(0, 'Stonetusk Boar'), 0, '{Charge}');
    });

});
