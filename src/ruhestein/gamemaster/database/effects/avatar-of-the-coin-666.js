/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (0) 1/1 Avatar of the Coin; You lost the coin flip, but gained a friend.

var AvatarOfTheCoin666 = {

    getDescription: function() {
        return this.formatDescription('You lost the coin flip, but gained a friend.');
    },

    cast: function() {
        // nop
    },

};



exports.AvatarOfTheCoin666 = AvatarOfTheCoin666;
