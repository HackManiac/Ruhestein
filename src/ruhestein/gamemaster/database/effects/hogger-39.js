/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 4/4 Hogger; At the end of your turn, summon a 2/2 Gnoll with Taunt.

var Hogger39 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, summon a 2/2 Gnoll with Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Hogger39"');
    },

};



exports.Hogger39 = Hogger39;
