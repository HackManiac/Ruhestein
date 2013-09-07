/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var YoungPriestess123 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, give another random friendly minion +1 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "YoungPriestess123"');
    },

};



exports.YoungPriestess123 = YoungPriestess123;
