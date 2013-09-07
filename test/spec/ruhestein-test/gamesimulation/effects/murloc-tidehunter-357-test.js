/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/1 Murloc Tidehunter; Battlecry: Summon a 1/1 Murloc Scout.

describe('MurlocTidehunter357', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Murloc Tidehunter'
                ],
            }
        });

        g.play(g.hand(0, 'Murloc Tidehunter'), 0, '{}');

        // TODO
    });

});
