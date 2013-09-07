/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AncientSecrets243 = {

    getDescription: function() {
        return this.formatDescription('Restore 8 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncientSecrets243"');
    },

};



exports.AncientSecrets243 = AncientSecrets243;
