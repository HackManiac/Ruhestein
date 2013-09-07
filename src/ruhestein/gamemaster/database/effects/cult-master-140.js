/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 4/2 Cult Master; Whenever one of your other minions dies, draw a card.

var CultMaster140 = {

    getDescription: function() {
        return this.formatDescription('Whenever one of your other minions dies, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CultMaster140"');
    },

};



exports.CultMaster140 = CultMaster140;
