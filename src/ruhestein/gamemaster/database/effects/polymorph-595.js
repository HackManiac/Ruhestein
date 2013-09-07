/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Polymorph; Transform a minion into a 1/1 Sheep.

var Polymorph595 = {

    cardFilters: {
        sheep: {
            name: 'Sheep',
            attack: 1,
            health: 1,
            isToken: true
        }
    },
    
    getDescription: function() {
        return this.formatDescription('Transform a minion into a 1/1 Sheep.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        var card = this.createNamedCard('sheep');
        target.transformTo(card);
    },

};



exports.Polymorph595 = Polymorph595;
