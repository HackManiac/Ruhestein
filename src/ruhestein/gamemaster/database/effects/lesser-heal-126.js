/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Lesser Heal; Hero Power  Restore 2 Health.

var LesserHeal126 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Restore 2 Health.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        this.healDamage(2, target);
    },

};



exports.LesserHeal126 = LesserHeal126;
