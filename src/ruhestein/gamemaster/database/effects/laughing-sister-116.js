/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/5 Laughing Sister; Can't be targeted by Spells or Hero Powers.

var LaughingSister116 = {

    getDescription: function() {
        return this.formatDescription('Can\'t be targeted by Spells or Hero Powers.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LaughingSister116"');
    },

};



exports.LaughingSister116 = LaughingSister116;
