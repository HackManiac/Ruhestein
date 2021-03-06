/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 4/3 Kor'kron Elite; Charge

describe('KorkronElite130', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Kor\'kron Elite'
                ],
            }
        });

        g.play(g.hand(0, 'Kor\'kron Elite'), 0, '4/3 {Charge}');
    });

});
