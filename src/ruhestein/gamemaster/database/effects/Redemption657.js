/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Redemption657 = {

    getDescription: function() {
        return this.formatDescription('Secret: When one of your minions dies, return it to life with 1 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Redemption657"');
    },

};



exports.Redemption657 = Redemption657;
