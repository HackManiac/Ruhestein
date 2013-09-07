/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var PowerWordShield431 = {

    getDescription: function() {
        return this.formatDescription('Give a minion +3 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "PowerWordShield431"');
    },

};



exports.PowerWordShield431 = PowerWordShield431;
