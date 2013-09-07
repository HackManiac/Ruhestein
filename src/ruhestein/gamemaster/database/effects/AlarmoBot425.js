/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 0/3 Alarm-o-Bot; At the start of your turn, swap this minion with a random one in your hand.

var AlarmoBot425 = {

    getDescription: function() {
        return this.formatDescription('At the start of your turn, swap this minion with a random one in your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AlarmoBot425"');
    },

};



exports.AlarmoBot425 = AlarmoBot425;
