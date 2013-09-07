/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AvatarOfTheCoin666 = {

    getDescription: function() {
        return this.formatDescription('You lost the coin flip, but gained a friend.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AvatarOfTheCoin666"');
    },

};



exports.AvatarOfTheCoin666 = AvatarOfTheCoin666;
