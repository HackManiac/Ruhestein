/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var IronbeakOwl500 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Silence a minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "IronbeakOwl500"');
    },

};



exports.IronbeakOwl500 = IronbeakOwl500;
