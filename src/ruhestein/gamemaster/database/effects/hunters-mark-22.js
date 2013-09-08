/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Hunter's Mark; Change a minion's Health to 1 this turn.

var HuntersMark22 = {

    getDescription: function() {
        return this.formatDescription('Change a minion\'s Health to 1 this turn.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        var buff = this.buffCard(target);

        var didEndTurn = function() {
            buff.uncast();
        };

        this.onEndOfNextPlayerTurn(didEndTurn);
    },

    castBuff: function(target) {
        this._target = target;
        this._originalMaxHealth = target.getMaxHealth();
        this._originalDamage = target.getDamage();

        target.setDamage(0);
        target.setMaxHealth(1);

        this.listenToGame('didDealDamage', this._didDealDamage);
    },

    uncastBuff: function(target) {
        if (target !== this._target) {
            throw new Error('PANIC');
        }

        this.stopListeningToGame('didDealDamage', this._didDealDamage);

        target.setMaxHealth(this._originalMaxHealth);
        target.setDamage(this._originalDamage);

        this._target = null;
    },

    _didDealDamage: function(info) {
        if (info.card === this._target) {
            this._target.healDamage(info.damage);
        }
    }

};



exports.HuntersMark22 = HuntersMark22;
