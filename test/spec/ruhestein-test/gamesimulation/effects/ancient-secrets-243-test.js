/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (0) Ancient Secrets; Restore 8 Health.

describe('AncientSecrets243', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Ancient Secrets'
                ],
            }
        });

        g.play(g.hand(0, 'Ancient Secrets'), 0, '{}');

        // TODO
    });

});
