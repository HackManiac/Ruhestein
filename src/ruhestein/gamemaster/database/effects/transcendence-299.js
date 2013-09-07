/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Transcendence; Until you kill Cho's minions, he can't be attacked.

var Transcendence299 = {

    getDescription: function() {
        return this.formatDescription('Until you kill Cho\'s minions, he can\'t be attacked.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Transcendence299"');
    },

};



exports.Transcendence299 = Transcendence299;
