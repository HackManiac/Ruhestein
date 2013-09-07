/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/2 Crazed Alchemist; Battlecry: Swap the Attack and Health of a minion.

var CrazedAlchemist612 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Swap the Attack and Health of a minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CrazedAlchemist612"');
    },

};



exports.CrazedAlchemist612 = CrazedAlchemist612;
