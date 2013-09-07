/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Windfury146 = {

    getDescription: function() {
        return this.formatDescription('Give a minion Windfury.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Windfury146"');
    },

};



exports.Windfury146 = Windfury146;
