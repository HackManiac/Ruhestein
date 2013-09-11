/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Hammer of Wrath; Deal 3 damage.  Draw a card.

var HammerOfWrath350 = {

    basePower: 3,

    getDescription: function() {
        return this.formatDescription('Deal {P} damage.  Draw a card.');
    },

    targetLocations: 'allCharacters',

    cast: function(target) {
        var damage = this.getCurrentPower();
        this.dealDamage(damage, target);
        this.getPlayer().drawCard();
    }

};



exports.HammerOfWrath350 = HammerOfWrath350;
