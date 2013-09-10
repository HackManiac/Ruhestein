/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Kobold Geomancer; Spell Power +1

describe('KoboldGeomancer479', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Kobold Geomancer'
                ],
            }
        });

        expect(g.game.getSpellPower()).to.equal(0);
        g.play(g.hand(0, 'Kobold Geomancer'), 0, '{ZZZ}');
        expect(g.game.getSpellPower()).to.equal(1);
        g.test.silence(g.battlefield(0));
        expect(g.game.getSpellPower()).to.equal(0);
    });

});
