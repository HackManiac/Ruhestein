/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var RagingWorgen95 = {

    getDescription: function() {
        return this.formatDescription('Enrage: Windfury and +1 Attack');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "RagingWorgen95"');
    },

};



exports.RagingWorgen95 = RagingWorgen95;
