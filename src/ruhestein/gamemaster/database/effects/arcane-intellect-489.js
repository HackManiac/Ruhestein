/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Arcane Intellect; Draw 2 cards.

var ArcaneIntellect489 = {

    getDescription: function() {
        return this.formatDescription('Draw 2 cards.');
    },

    cast: function() {
        this.getPlayer().drawCards(2);
    },

};



exports.ArcaneIntellect489 = ArcaneIntellect489;
