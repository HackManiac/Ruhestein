/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From heroPower card: (2) Fireblast; Hero Power  Deal 1 damage.

describe('Fireblast677', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                'class': 'mage',
                deck: [
                ],
            }
        });

        g.play(g.heroPower('Fireblast'), g.oHero('0/30'), '{}', '0/29');
    });

});
