/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MarkOfTheWild480 = {

    getDescription: function() {
        return this.formatDescription('Give a minion Taunt and +2/+2. (+2 Attack/+2 Health)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MarkOfTheWild480"');
    },

};



exports.MarkOfTheWild480 = MarkOfTheWild480;
