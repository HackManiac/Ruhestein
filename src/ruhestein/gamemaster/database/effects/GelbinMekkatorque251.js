/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 6/6 Gelbin Mekkatorque; Battlecry: Summon an AWESOME invention.

var GelbinMekkatorque251 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon an AWESOME invention.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "GelbinMekkatorque251"');
    },

};



exports.GelbinMekkatorque251 = GelbinMekkatorque251;
