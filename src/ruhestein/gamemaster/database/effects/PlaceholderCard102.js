/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var PlaceholderCard102 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Someone remembers to publish this card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "PlaceholderCard102"');
    },

};



exports.PlaceholderCard102 = PlaceholderCard102;
