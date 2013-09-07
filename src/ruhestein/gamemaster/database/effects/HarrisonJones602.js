/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var HarrisonJones602 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy your opponent\'s weapon and draw cards equal to its Durability.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HarrisonJones602"');
    },

};



exports.HarrisonJones602 = HarrisonJones602;
