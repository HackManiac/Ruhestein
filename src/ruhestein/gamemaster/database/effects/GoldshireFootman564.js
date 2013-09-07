/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/2 Goldshire Footman; Taunt

var GoldshireFootman564 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "GoldshireFootman564"');
    },

};



exports.GoldshireFootman564 = GoldshireFootman564;
