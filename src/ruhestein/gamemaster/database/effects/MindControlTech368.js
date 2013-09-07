/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MindControlTech368 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: If your opponent has 4 or more minions, take control of one at random.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MindControlTech368"');
    },

};



exports.MindControlTech368 = MindControlTech368;
