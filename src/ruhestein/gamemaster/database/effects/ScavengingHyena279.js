/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/2 Scavenging Hyena; Whenever a Beast dies, gain +2/+1.

var ScavengingHyena279 = {

    getDescription: function() {
        return this.formatDescription('Whenever a Beast dies, gain +2/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ScavengingHyena279"');
    },

};



exports.ScavengingHyena279 = ScavengingHyena279;
