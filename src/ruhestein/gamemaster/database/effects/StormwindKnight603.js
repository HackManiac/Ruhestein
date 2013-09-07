/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var StormwindKnight603 = {

    getDescription: function() {
        return this.formatDescription('Charge');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StormwindKnight603"');
    },

};



exports.StormwindKnight603 = StormwindKnight603;
