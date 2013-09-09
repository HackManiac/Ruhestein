/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 0/2 Stoneclaw Totem; Taunt

var StoneclawTotem298 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        this.castTaunt();
    },

};



exports.StoneclawTotem298 = StoneclawTotem298;
