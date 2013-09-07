/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (3) Animal Companion; Summon a random Beast Companion.

describe('AnimalCompanion578', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Animal Companion'
                ],
            }
        });

        g.play(g.hand(0, 'Animal Companion'), 0, '{}');

        // TODO
    });

});
