/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MurlocTidehunter357 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon a 1/1 Murloc Scout.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MurlocTidehunter357"');
    },

};



exports.MurlocTidehunter357 = MurlocTidehunter357;
