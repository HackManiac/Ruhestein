/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Lightwarden436 = {

    getDescription: function() {
        return this.formatDescription('Whenever a character is healed, gain +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Lightwarden436"');
    },

};



exports.Lightwarden436 = Lightwarden436;
