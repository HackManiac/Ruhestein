/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Doomsayer467 = {

    getDescription: function() {
        return this.formatDescription('At the start of your turn, destroy ALL minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Doomsayer467"');
    },

};



exports.Doomsayer467 = Doomsayer467;
