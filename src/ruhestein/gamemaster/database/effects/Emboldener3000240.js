/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Emboldener3000240 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, give a random minion +1/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Emboldener3000240"');
    },

};



exports.Emboldener3000240 = Emboldener3000240;
