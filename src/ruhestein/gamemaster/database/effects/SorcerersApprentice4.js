/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/2 Sorcerer's Apprentice; Your spells cost (1) less.

var SorcerersApprentice4 = {

    getDescription: function() {
        return this.formatDescription('Your spells cost (1) less.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SorcerersApprentice4"');
    },

};



exports.SorcerersApprentice4 = SorcerersApprentice4;
