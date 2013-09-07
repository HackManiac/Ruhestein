/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Preparation364 = {

    getDescription: function() {
        return this.formatDescription('The next spell you cast this turn costs (2) less.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Preparation364"');
    },

};



exports.Preparation364 = Preparation364;
