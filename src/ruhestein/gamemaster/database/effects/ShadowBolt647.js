/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ShadowBolt647 = {

    getDescription: function() {
        return this.formatDescription('Deal 4 damage to a minion.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ShadowBolt647"');
    },

};



exports.ShadowBolt647 = ShadowBolt647;
