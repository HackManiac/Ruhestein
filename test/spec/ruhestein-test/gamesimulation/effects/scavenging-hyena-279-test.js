/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Scavenging Hyena; Whenever a Beast dies, gain +2/+1.

describe('ScavengingHyena279', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    it('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '2 Bloodfen Raptor',
                    '1 Wisp',
                    '1 Scavenging Hyena'
                ],
                playCards: 3
            }
        });

        g.play(g.hand(0, 'Scavenging Hyena'), 0, '2/2 {EffectTrigger,ZZZ}');

        g.test.kill(g.battlefield(1, '3/2'));

        g.battlefield(0, '4/3');

        g.test.kill(g.battlefield(1, '3/2'));

        g.battlefield(0, '6/4');

        g.test.kill(g.battlefield(1, '1/1'));

        g.battlefield(0, '6/4');
    });

});
