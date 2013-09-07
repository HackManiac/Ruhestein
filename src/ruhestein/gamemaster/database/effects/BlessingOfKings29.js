/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BlessingOfKings29 = {

    getDescription: function() {
        return this.formatDescription('Give a minion +4/+4. (+4 Attack/+4 Health)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BlessingOfKings29"');
    },

};



exports.BlessingOfKings29 = BlessingOfKings29;
