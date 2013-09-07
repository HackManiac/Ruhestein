/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Rampage; Give a damaged minion +3/+3.

var Rampage454 = {

    getDescription: function() {
        return this.formatDescription('Give a damaged minion +3/+3.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Rampage454"');
    },

};



exports.Rampage454 = Rampage454;
