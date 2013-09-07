/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Backstab471 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to an enemy minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Backstab471"');
    },

};



exports.Backstab471 = Backstab471;
