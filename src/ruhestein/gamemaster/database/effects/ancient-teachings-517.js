/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Ancient Teachings; Draw 2 cards.

var AncientTeachings517 = {

    getDescription: function() {
        return this.formatDescription('Draw 2 cards.');
    },

    cast: function() {
        this.getPlayer().drawCards(2);
    }

};



exports.AncientTeachings517 = AncientTeachings517;
