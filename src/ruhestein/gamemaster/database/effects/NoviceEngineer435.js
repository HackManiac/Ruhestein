/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var NoviceEngineer435 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "NoviceEngineer435"');
    },

};



exports.NoviceEngineer435 = NoviceEngineer435;
