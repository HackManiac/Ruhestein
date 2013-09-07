/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Shadowflame673 = {

    getDescription: function() {
        return this.formatDescription('Destroy a friendly minion and deal its Attack damage to all enemy minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Shadowflame673"');
    },

};



exports.Shadowflame673 = Shadowflame673;
