/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 1/4 Armorsmith; Whenever a friendly minion takes damage, gain 1 Armor.

var Armorsmith644 = {

    getDescription: function() {
        return this.formatDescription('Whenever a friendly minion takes damage, gain 1 Armor.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Armorsmith644"');
    },

};



exports.Armorsmith644 = Armorsmith644;
