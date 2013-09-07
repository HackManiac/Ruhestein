/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/1 Murloc Tidehunter; Battlecry: Summon a 1/1 Murloc Scout.

var MurlocTidehunter357 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon a 1/1 Murloc Scout.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MurlocTidehunter357"');
    },

};



exports.MurlocTidehunter357 = MurlocTidehunter357;
