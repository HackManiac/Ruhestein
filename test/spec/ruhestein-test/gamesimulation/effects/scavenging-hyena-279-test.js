/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');


var GameSimulationTestUtils = require('../gamesimulation-test-utils');



// From minion card: (2) 2/2 Scavenging Hyena; Whenever a Beast dies, gain +2/+1.

describe('ScavengingHyena279', function() {

    var setupDefaultGameTestEngine = GameSimulationTestUtils.setupDefaultGameTestEngine;

    xit('should work correctly', function() {
        var g = setupDefaultGameTestEngine({
            player2: {
                deck: [
                    '1 Scavenging Hyena'
                ],
            }
        });

        g.play(g.hand(0, 'Scavenging Hyena'), 0, '{}');

        // TODO
    });

});
