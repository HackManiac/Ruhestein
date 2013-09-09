/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Cone of Cold; Freeze a minion and the minions next to it, and deal 1 damage to them.

var ConeOfCold26 = {

    basePower: 1,
    
    getDescription: function() {
        return this.formatDescription('Freeze a minion and the minions next to it, and deal 1 damage to them.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        var collection;
        if (target.getOwner() === this.getPlayer()) {
            collection = this.getPlayer().getBattlefield();
        } else {
            collection = this.getPlayer().getOpponentBattlefield();
        }

        var index = collection.indexOf(target);

        var cards = [];
        if (index > 0) {
            cards.push(collection.at(index - 1));
        }
        cards.push(target);
        if (index < (collection.length - 1)) {
            cards.push(collection.at(index + 1));
        }

        var damage = this.getCurrentPower();

        for (var i = 0; i < cards.length; i++) {
            var card = cards [i];
            this.dealDamage(damage, card);
            card.setIsFrozen(true);
        }
    },

};



exports.ConeOfCold26 = ConeOfCold26;
