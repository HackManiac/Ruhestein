/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ArcaneGolem97 = {

    getDescription: function() {
        return this.formatDescription('Charge. Battlecry: Give your opponent a Mana Crystal.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArcaneGolem97"');
    },

};



exports.ArcaneGolem97 = ArcaneGolem97;
