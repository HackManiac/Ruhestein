/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Ancient Secrets; Restore 8 Health.

var AncientSecrets243 = {

    getDescription: function() {
        return this.formatDescription('Restore 8 Health.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AncientSecrets243"');
    },

};



exports.AncientSecrets243 = AncientSecrets243;
