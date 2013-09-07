/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (8) 6/6 Tirion Fordring; Divine Shield. Taunt. Deathrattle: Equip a 5/3 Ashbringer.

var TirionFordring391 = {

    getDescription: function() {
        return this.formatDescription('Divine Shield. Taunt. Deathrattle: Equip a 5/3 Ashbringer.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TirionFordring391"');
    },

};



exports.TirionFordring391 = TirionFordring391;
