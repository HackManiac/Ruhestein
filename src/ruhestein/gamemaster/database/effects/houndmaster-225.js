/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 4/3 Houndmaster; Battlecry: Give a friendly Beast +2/+2 and Taunt.

var Houndmaster225 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly Beast +2/+2 and Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Houndmaster225"');
    },

};



exports.Houndmaster225 = Houndmaster225;
