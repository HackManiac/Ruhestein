/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var FlameImp85 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 2 damage to your hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FlameImp85"');
    },

};



exports.FlameImp85 = FlameImp85;
