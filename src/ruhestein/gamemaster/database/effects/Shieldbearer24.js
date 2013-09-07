/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Shieldbearer24 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Shieldbearer24"');
    },

};



exports.Shieldbearer24 = Shieldbearer24;
