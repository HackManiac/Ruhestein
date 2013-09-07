/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Repentance642 = {

    getDescription: function() {
        return this.formatDescription('Secret: When your opponent plays a minion, reduce its Health to 1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Repentance642"');
    },

};



exports.Repentance642 = Repentance642;
