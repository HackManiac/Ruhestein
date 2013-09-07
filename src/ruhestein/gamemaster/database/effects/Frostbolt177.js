/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Frostbolt177 = {

    getDescription: function() {
        return this.formatDescription('Deal 3 damage to a character and Freeze it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Frostbolt177"');
    },

};



exports.Frostbolt177 = Frostbolt177;
