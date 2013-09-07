/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Mirror Image; Summon two 0/1 minions with Taunt.

var MirrorImage30 = {

    getDescription: function() {
        return this.formatDescription('Summon two 0/1 minions with Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MirrorImage30"');
    },

};



exports.MirrorImage30 = MirrorImage30;
