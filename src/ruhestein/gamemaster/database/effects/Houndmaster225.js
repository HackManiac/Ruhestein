/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Houndmaster225 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly Beast +2/+2 and Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Houndmaster225"');
    },

};



exports.Houndmaster225 = Houndmaster225;
