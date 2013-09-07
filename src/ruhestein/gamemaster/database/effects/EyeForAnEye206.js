/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var EyeForAnEye206 = {

    getDescription: function() {
        return this.formatDescription('Secret: When your hero takes damage, deal that much damage to the enemy hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "EyeForAnEye206"');
    },

};



exports.EyeForAnEye206 = EyeForAnEye206;
