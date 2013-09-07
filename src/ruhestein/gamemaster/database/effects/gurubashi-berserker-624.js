/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 2/7 Gurubashi Berserker; Whenever this minion takes damage, gain +3 Attack.

var GurubashiBerserker624 = {

    getDescription: function() {
        return this.formatDescription('Whenever this minion takes damage, gain +3 Attack.');
    },

    cast: function() {
        var didDealDamage = function(info) {
            if (info.card === this.getCard()) {
                this._updateBuff();
            }
        };

        this.listenToGame('didDealDamage', didDealDamage);
    },

    uncast: function() {
        if (this._buff) {
            this._buff.uncast();
            this._buff = null;
        }
        if (this._currentModifier < 0) {
            this.getCard().modifyCurrentAttack(this._currentModifier);
            this._currentModifier = 0;
        }
    },

    _currentModifier: 0,

    _buff: null,

    _updateBuff: function() {
        if (!this._buff) {
            this._buff = this.buffCard(this.getCard());
        }
        
        this.getCard().modifyCurrentAttack(3);
        this._currentModifier -= 3;
    },

    castBuff: function() {
        // nop
    }

};



exports.GurubashiBerserker624 = GurubashiBerserker624;
