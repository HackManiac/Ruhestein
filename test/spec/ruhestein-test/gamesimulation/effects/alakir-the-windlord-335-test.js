/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (8) 3/5 Al'Akir the Windlord; Windfury, Charge, Divine Shield, Taunt

describe('AlAkirTheWindlord335', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Al\'Akir the Windlord'
                ],
            }
        });

        g.play(g.hand(0, 'Al\'Akir the Windlord'), 0, '{}');

        // TODO
    });

});
