/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (1) 2/1 Voodoo Doctor; Battlecry: Restore 2 Health.

var VoodooDoctor410 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Restore 2 Health.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        this.healDamage(2, target);
    },

};



exports.VoodooDoctor410 = VoodooDoctor410;
