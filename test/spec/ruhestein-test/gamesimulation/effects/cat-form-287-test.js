/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Cat Form; Charge

describe('CatForm287', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Druid of the Claw'
                ],
            }
        });

        g.playChooseOne(g.hand(0, 'Druid of the Claw'), 0, 0, '{Dead,ZZZ}');
        g.battlefield(0, '4/4 {Charge}');
    });

});
