/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Assassinate568 = {

    getDescription: function() {
        return this.formatDescription('Destroy an enemy minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Assassinate568"');
    },

};



exports.Assassinate568 = Assassinate568;
