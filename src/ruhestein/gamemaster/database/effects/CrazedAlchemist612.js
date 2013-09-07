/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var CrazedAlchemist612 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Swap the Attack and Health of a minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CrazedAlchemist612"');
    },

};



exports.CrazedAlchemist612 = CrazedAlchemist612;
