/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SI7Agent286 = {

    getDescription: function() {
        return this.formatDescription('Combo: Deal 2 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SI7Agent286"');
    },

};



exports.SI7Agent286 = SI7Agent286;
