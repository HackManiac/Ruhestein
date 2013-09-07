/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var UnboundElemental51 = {

    getDescription: function() {
        return this.formatDescription('Whenever you play a card with Overload, gain +1/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "UnboundElemental51"');
    },

};



exports.UnboundElemental51 = UnboundElemental51;
