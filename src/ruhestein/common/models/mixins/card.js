/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');



var Card = {

    isAbility: function() {
        return (this.getType() === 'ability');
    },

    isHero: function() {
        return (this.getType() === 'hero');
    },

    isHeroPower: function() {
        return (this.getType() === 'heroPower');
    },

    isMinion: function() {
        return (this.getType() === 'minion');
    },

    isWeapon: function() {
        return (this.getType() === 'weapon');
    },

    isSpell: function() {
        return this.isAbility();
    },

    canAttack: function() {
        var location = this.getLocation();
        return (((location === 'hero') || (location === 'heroPower') || (location === 'battlefield')) && !this.isAsleep());
    },

    isTargetable: function() {
        var location = this.getLocation();
        return (((location === 'hero') || (location === 'battlefield')) && !this.hasStealth());
    },

    isBeast: function() {
        return (this.getRace() === 'beast');
    },

    isDemon: function() {
        return (this.getRace() === 'demon');
    },

    isDragon: function() {
        return (this.getRace() === 'dragon');
    },

    isMurloc: function() {
        return (this.getRace() === 'murloc');
    },

    isPirate: function() {
        return (this.getRace() === 'pirate');
    },

    isTotem: function() {
        return (this.getRace() === 'totem');
    },

    toString: function(type) {
        var _this = this;

        var result = '';
        if (type === 'full') {
            if (this.getLocation() === 'hand') {
                result += '(' + this.getCurrentCost() + ') ';
            }
        }
        if (this.isHero() || this.isMinion() || this.isWeapon()) {
            result += this.getCurrentAttack() + '/' + this.getCurrentHealth() + ' ';
        }
        if (this.isHero() && (this.getCurrentArmor() > 0)) {
            result += '[' + this.getCurrentArmor() + '] ';
        }
        result += this.getName();
        if (type === 'debug') {
            result += ' @' + this.cid;
        }
        if (type === 'full') {
            if (this.getDescription()) {
                result += '; ' + this.getDescription();
            }
            var possibleAttributes = {
                'isAsleep': 'ZZZ',
                'isDiscarded': 'Dead',
                'isFrozen': 'Frozen',
                'isImmune': 'Immune',
                'isSilenced': 'Silenced',
                'hasCharge': 'Charge',
                'hasDeathrattle': 'Deathrattle',
                'hasDivineShield': 'Divine Shield',
                'hasEffectTrigger': 'Effect Trigger',
                'hasStealth': 'Stealth',
                'hasTaunt': 'Taunt',
                'hasWindfury': 'Windfury',
            };
            var attributes = [];
            _.forEach(possibleAttributes, function(value, key) {
                if (_this.get(key)) {
                    attributes.push(value);
                }
            });
            if (attributes.length > 0) {
                result += ' {' + attributes.sort().join(',') + '}';
            }
        }
        return result;
    }

};



module.exports = Card;
