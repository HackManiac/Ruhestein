/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Frostwolf Warlord; Has +1/+1 for each other friendly minion on the battlefield.

var FrostwolfWarlord604 = {

    getDescription: function() {
        return this.formatDescription('Has +1/+1 for each other friendly minion on the battlefield.');
    },

    cast: function() {
        this.onBattlefieldChange(function() {
            this._updateBuff();
        });

        this.buffCard(this.getCard());
    },

    castBuff: function() {
        this._updateBuff();
    },

    uncastBuff: function() {
        this._updateBuff([]);
    },
    
    _currentModifier: 0,

    _updateBuff: function(cards) {
        var target = this.getCard();

        if (cards === undefined) {
            cards = this.collectCardsByLocation('battlefield', function(card) {
                return card !== target;
            });
        }

        var newModifier = cards.length;

        var delta = newModifier - this._currentModifier;
        if (delta) {
            target.modifyAttackAndHealth(delta, delta);

            this._currentModifier = newModifier;
        }

    }

};



exports.FrostwolfWarlord604 = FrostwolfWarlord604;
