/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Explosive Trap; Secret: When your hero is attacked, deal 2 damage to all enemies.

var ExplosiveTrap344 = {

    basePower: 2,

    getDescription: function() {
        return this.formatDescription('Secret: When your hero is attacked, deal 2 damage to all enemies.');
    },

    cast: function() {
        // nop
    },

    castSecret: function() {
        var willPlayCard = function(info) {
            if (info.targetCard === this.getPlayer().getHero()) {
                this.stopListeningToGame('willPlayCard', willPlayCard);

                this.getCard().triggerSecret();
            }
        };

        this.listenToGame('willPlayCard', willPlayCard);
    },

    triggerSecret: function() {
        var damage = this.getCurrentPower();

        var cards = this.collectCardsByLocation('opponentCharacters');
        cards.forEach(function(card) {
            this.dealDamage(damage, card);
        }, this);
    }

};



exports.ExplosiveTrap344 = ExplosiveTrap344;
