/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MirrorImage30 = {

    getDescription: function() {
        return this.formatDescription('Summon two 0/1 minions with Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MirrorImage30"');
    },

};



exports.MirrorImage30 = MirrorImage30;
