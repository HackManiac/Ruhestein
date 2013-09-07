/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Starfire667 = {

    getDescription: function() {
        return this.formatDescription('Deal 5 damage.  Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Starfire667"');
    },

};



exports.Starfire667 = Starfire667;
