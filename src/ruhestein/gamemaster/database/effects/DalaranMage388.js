/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/4 Dalaran Mage; Spell Power +1

var DalaranMage388 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DalaranMage388"');
    },

};



exports.DalaranMage388 = DalaranMage388;
