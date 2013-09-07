/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (4) 3/3 Arathi Weaponsmith; Battlecry: Equip a 2/2 weapon.

describe('ArathiWeaponsmith504', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Arathi Weaponsmith'
                ],
            }
        });

        g.play(g.hand(0, 'Arathi Weaponsmith'), 0, '{}');

        // TODO
    });

});
