/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From weapon card: (4) 4/2 Truesilver Champion; Whenever your hero attacks, restore 2 Health to it.

var TruesilverChampion293 = {

    getDescription: function() {
        return this.formatDescription('Whenever your hero attacks, restore 2 Health to it.');
    },

    cast: function() {
        var willPlayCard = function(info) {
            var hero = this.getPlayer().getHero();
            if (info.card !== hero) {
                // nop
            } else if (!info.attack) {
                // nop
            } else {
                this.healDamage(2, hero);
            }
        };

        this.listenToGame('willPlayCard', willPlayCard);
    },

};



exports.TruesilverChampion293 = TruesilverChampion293;
