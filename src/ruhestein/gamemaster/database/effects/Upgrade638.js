/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Upgrade638 = {

    getDescription: function() {
        return this.formatDescription('If you have a weapon, give it +1/+1.  Otherwise equip a 1/3 weapon.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Upgrade638"');
    },

};



exports.Upgrade638 = Upgrade638;
