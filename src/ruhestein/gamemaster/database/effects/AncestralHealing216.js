/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Ancestral Healing; Restore a minion to full Health and give it Taunt.

var AncestralHealing216 = {

    getDescription: function() {
        return this.formatDescription('Restore a minion to full Health and give it Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncestralHealing216"');
    },

};



exports.AncestralHealing216 = AncestralHealing216;
