/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Redemption; Secret: When one of your minions dies, return it to life with 1 Health.

var Redemption657 = {

    getDescription: function() {
        return this.formatDescription('Secret: When one of your minions dies, return it to life with 1 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Redemption657"');
    },

};



exports.Redemption657 = Redemption657;
