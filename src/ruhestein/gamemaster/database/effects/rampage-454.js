/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Rampage; Give a damaged minion +3/+3.

var Rampage454 = {

    getDescription: function() {
        return this.formatDescription('Give a damaged minion +3/+3.');
    },

    targetLocations: 'allBattlefields',

    targetFilter: function(card) {
        return (card.getDamage() > 0);
    },

    cast: function(target) {
        this.buffCard(target);
    },

    buff: {
        currentAttack: 3,
        maxHealth: 3
    }

};



exports.Rampage454 = Rampage454;
