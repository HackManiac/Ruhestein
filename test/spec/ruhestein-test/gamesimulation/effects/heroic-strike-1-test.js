/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From ability card: (2) Heroic Strike; Give your hero +4 Attack this turn.

describe('HeroicStrike1', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Heroic Strike'
                ],
            }
        });

        g.hero('0/30');
        g.play(g.hand(0, 'Heroic Strike'), null, '{Dead}');
        g.hero('4/30');
        g.endTurn();
        g.hero('0/30');
        g.endTurn();
        g.hero('0/30');
    });

});
