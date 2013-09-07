/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var EtherealArcanist125 = {

    getDescription: function() {
        return this.formatDescription('If you control a Secret at the end of your turn, gain +2/+2.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "EtherealArcanist125"');
    },

};



exports.EtherealArcanist125 = EtherealArcanist125;
