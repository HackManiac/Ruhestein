/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Rooted; +5 Health and Taunt.

var Rooted375 = {

    getDescription: function() {
        return this.formatDescription('+5 Health and Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Rooted375"');
    },

};



exports.Rooted375 = Rooted375;
