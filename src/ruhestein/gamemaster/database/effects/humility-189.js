/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Humility; Change a minion's Attack to 1.

var Humility189 = {

    getDescription: function() {
        return this.formatDescription('Change a minion\'s Attack to 1.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        target.setCurrentAttack(1);
    }

};



exports.Humility189 = Humility189;
