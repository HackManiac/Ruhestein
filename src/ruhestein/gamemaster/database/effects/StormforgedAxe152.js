/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From weapon card: (2) 2/3 Stormforged Axe; Overload: (1)

var StormforgedAxe152 = {

    getDescription: function() {
        return this.formatDescription('Overload: (1)');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StormforgedAxe152"');
    },

};



exports.StormforgedAxe152 = StormforgedAxe152;
