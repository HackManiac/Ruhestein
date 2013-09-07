/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var RockbiterWeapon491 = {

    getDescription: function() {
        return this.formatDescription('Give a friendly character +3 Attack this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "RockbiterWeapon491"');
    },

};



exports.RockbiterWeapon491 = RockbiterWeapon491;
