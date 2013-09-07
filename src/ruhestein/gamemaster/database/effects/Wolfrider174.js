/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/1 Wolfrider; Charge

var Wolfrider174 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Wolfrider174"');
    },

};



exports.Wolfrider174 = Wolfrider174;
