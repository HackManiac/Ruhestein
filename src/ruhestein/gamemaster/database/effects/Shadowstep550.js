/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Shadowstep550 = {

    getDescription: function() {
        return this.formatDescription('Return a friendly minion to your hand. It costs (2) less.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Shadowstep550"');
    },

};



exports.Shadowstep550 = Shadowstep550;
