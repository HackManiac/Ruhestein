/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ForkedLightning530 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to 2 random enemy minions. Overload: (2)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ForkedLightning530"');
    },

};



exports.ForkedLightning530 = ForkedLightning530;
