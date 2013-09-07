/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Ancestral Spirit; Choose a minion. When that minion is destroyed, return it to the battlefield.

describe('AncestralSpirit526', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ancestral Spirit'
                ],
            }
        });

        g.play(g.hand(0, 'Ancestral Spirit'), 0, '{}');

        // TODO
    });

});
