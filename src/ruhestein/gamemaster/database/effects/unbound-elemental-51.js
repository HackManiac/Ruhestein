/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/4 Unbound Elemental; Whenever you play a card with Overload, gain +1/+1.

var UnboundElemental51 = {

    getDescription: function() {
        return this.formatDescription('Whenever you play a card with Overload, gain +1/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "UnboundElemental51"');
    },

};



exports.UnboundElemental51 = UnboundElemental51;
