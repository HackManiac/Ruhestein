/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Uproot262 = {

    getDescription: function() {
        return this.formatDescription('+5 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Uproot262"');
    },

};



exports.Uproot262 = Uproot262;
