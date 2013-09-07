/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Mirror Entity; Secret: When your opponent plays a minion, summon a copy of it.

var MirrorEntity569 = {

    getDescription: function() {
        return this.formatDescription('Secret: When your opponent plays a minion, summon a copy of it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MirrorEntity569"');
    },

};



exports.MirrorEntity569 = MirrorEntity569;
