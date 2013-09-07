/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Brawl297 = {

    getDescription: function() {
        return this.formatDescription('Destroy all minions except one.  (chosen randomly)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Brawl297"');
    },

};



exports.Brawl297 = Brawl297;
