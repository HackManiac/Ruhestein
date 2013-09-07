/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 4/3 Kirin Tor Mage; Battlecry: The next Secret you play this turn costs (0).

var KirinTorMage411 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: The next Secret you play this turn costs (0).');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "KirinTorMage411"');
    },

};



exports.KirinTorMage411 = KirinTorMage411;
