/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AncientBrewmaster572 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Return a friendly minion from the battlefield to your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncientBrewmaster572"');
    },

};



exports.AncientBrewmaster572 = AncientBrewmaster572;
