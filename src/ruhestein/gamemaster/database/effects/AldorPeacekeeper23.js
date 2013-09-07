/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AldorPeacekeeper23 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Change an enemy minion\'s Attack to 1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AldorPeacekeeper23"');
    },

};



exports.AldorPeacekeeper23 = AldorPeacekeeper23;
