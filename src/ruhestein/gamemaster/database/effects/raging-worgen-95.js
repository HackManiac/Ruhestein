/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/3 Raging Worgen; Enrage: Windfury and +1 Attack

var RagingWorgen95 = {

    getDescription: function() {
        return this.formatDescription('Enrage: Windfury and +1 Attack');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "RagingWorgen95"');
    },

};



exports.RagingWorgen95 = RagingWorgen95;
