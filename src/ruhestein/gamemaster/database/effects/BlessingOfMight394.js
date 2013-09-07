/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BlessingOfMight394 = {

    getDescription: function() {
        return this.formatDescription('Give a minion +3 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BlessingOfMight394"');
    },

};



exports.BlessingOfMight394 = BlessingOfMight394;
