/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var InjuredBlademaster209 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 4 damage to HIMSELF.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "InjuredBlademaster209"');
    },

};



exports.InjuredBlademaster209 = InjuredBlademaster209;
