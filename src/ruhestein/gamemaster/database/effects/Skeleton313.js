/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 1/1 Skeleton;  

var Skeleton313 = {

    getDescription: function() {
        return this.formatDescription(' ');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Skeleton313"');
    },

};



exports.Skeleton313 = Skeleton313;
