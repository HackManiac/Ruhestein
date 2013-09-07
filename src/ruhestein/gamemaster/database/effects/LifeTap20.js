/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Life Tap; Hero Power  Draw a card and take 2 damage.

var LifeTap20 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Draw a card and take 2 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LifeTap20"');
    },

};



exports.LifeTap20 = LifeTap20;
