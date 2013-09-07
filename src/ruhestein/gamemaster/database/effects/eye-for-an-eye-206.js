/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Eye for an Eye; Secret: When your hero takes damage, deal that much damage to the enemy hero.

var EyeForAnEye206 = {

    getDescription: function() {
        return this.formatDescription('Secret: When your hero takes damage, deal that much damage to the enemy hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "EyeForAnEye206"');
    },

};



exports.EyeForAnEye206 = EyeForAnEye206;
