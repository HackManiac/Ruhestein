/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (9) 3/15 Lord Jaraxxus; Battlecry: Destroy your hero and replace him with Lord Jaraxxus.

var LordJaraxxus482 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy your hero and replace him with Lord Jaraxxus.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LordJaraxxus482"');
    },

};



exports.LordJaraxxus482 = LordJaraxxus482;
