/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Execute; Destroy a damaged enemy minion.

var Execute227 = {

    getDescription: function() {
        return this.formatDescription('Destroy a damaged enemy minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Execute227"');
    },

};



exports.Execute227 = Execute227;
