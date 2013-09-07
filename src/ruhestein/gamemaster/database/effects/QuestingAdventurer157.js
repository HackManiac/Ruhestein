/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var QuestingAdventurer157 = {

    getDescription: function() {
        return this.formatDescription('Whenever you play a card, gain +1/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "QuestingAdventurer157"');
    },

};



exports.QuestingAdventurer157 = QuestingAdventurer157;
