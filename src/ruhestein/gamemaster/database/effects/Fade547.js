/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Fade547 = {

    getDescription: function() {
        return this.formatDescription('Give your minions Taunt. Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Fade547"');
    },

};



exports.Fade547 = Fade547;
