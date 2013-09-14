/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/3 Mind Control Tech; Battlecry: If your opponent has 4 or more minions, take control of one at random.

var MindControlTech368 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: If your opponent has 4 or more minions, take control of one at random.');
    },

    castBattlecry: function() {
        var count = this.getPlayer().getOpponentBattlefield().length;
        if (count >= 4) {
            var index = this.getGame().roll(count) - 1;
            var card = this.getPlayer().getOpponentBattlefield().at(index);
            card.setOwner(this.getPlayer());
        }
    }

};



exports.MindControlTech368 = MindControlTech368;
