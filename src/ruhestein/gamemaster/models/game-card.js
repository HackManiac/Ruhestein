/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');


var utils = require('../../common/lib/utils');

var Collection = require('./base/collection');

var Card = require('./card');



var GameCard = Card.extend({

    defaults: function() {
        var superDefaults = Card.prototype.defaults.apply(this, arguments);

        return _.extend(superDefaults, {

            location: null,

            currentCost: 0,

            currentAttack: 0,

            maxHealth: 0,

            damage: 0,

            currentHealth: 0,

            currentAttacksThisTurn: 0,

            isAsleep: false,

            isDiscarded: false,

            isFrozen: false,

            isImmune: false,

            isSilenced: false,

            hasCharge: false,

            hasDeathrattle: false,
            
            hasDivineShield: false,

            hasEffectTrigger: false,

            hasStealth: false,

            hasTaunt: false,

            hasWindfury: false,

            effects: new Collection(),

            buffs: new Collection(),

        });
    },

    dispose: function() {
        var i, n, buffs, effects;

        if (this.disposed) {
            return;
        }

        buffs = this.getBuffs().toArray();
        this.getBuffs().reset();

        for (i = 0, n = buffs.length; i < n; i++) {
            buffs [i].dispose();
        }

        effects = this.getEffects().toArray();
        this.getEffects().reset();

        for (i = 0, n = effects.length; i < n; i++) {
            effects [i].dispose();
        }

        Card.prototype.dispose.apply(this, arguments);
    },

    setOwner: function(owner, newLocation) {
        if (newLocation === undefined) {
            newLocation = this.getLocation();
        }

        this.moveTo('transitioningCards');

        this.set('owner', owner);

        this.moveTo(newLocation);
    },

    getLocation: function() {
        return this.get('location');
    },

    setLocation: function(location) {
        this.set('location', location);
    },

    getCurrentCost: function() {
        return this.get('currentCost');
    },

    setCurrentCost: function(currentCost) {
        this.set('currentCost', currentCost);
    },
    
    getCurrentAttack: function() {
        return this.get('currentAttack');
    },

    setCurrentAttack: function(currentAttack) {
        this.set('currentAttack', utils.cap(currentAttack, 0, 1000));
    },

    modifyCurrentAttack: function(delta) {
        this.setCurrentAttack(this.getCurrentAttack() + delta);
    },

    getMaxHealth: function() {
        return this.get('maxHealth');
    },

    setMaxHealth: function(maxHealth) {
        var delta = maxHealth - this.getMaxHealth();
        this.set('maxHealth', utils.cap(maxHealth, 0, 1000));
        if (delta < 0) {
            this.modifyDamage(delta);
        } else {
            this._updateCurrentHealth();
        }
    },

    modifyMaxHealth: function(delta) {
        this.setMaxHealth(this.getMaxHealth() + delta);
    },

    modifyAttackAndHealth: function(attackDelta, healthDelta) {
        this.modifyCurrentAttack(attackDelta);
        this.modifyMaxHealth(healthDelta);
    },
    
    getDamage: function() {
        return this.get('damage');
    },

    setDamage: function(damage) {
        this.set('damage', utils.cap(damage, 0, 1000));
        this._updateCurrentHealth();
    },

    modifyDamage: function(delta) {
        this.setDamage(this.getDamage() + delta);
    },

    getCurrentHealth: function() {
        return this.get('currentHealth');
    },

    _updateCurrentHealth: function() {
        var currentHealth = utils.cap(this.getMaxHealth() - this.getDamage(), 0, 1000);
        this.set('currentHealth', currentHealth);
    },

    getMaxAttacksThisTurn: function() {
        var result;
        if (this.isAsleep()) {
            result = 0;
        } else if (this.hasWindfury()) {
            result = 2;
        } else {
            result = 1;
        }
        return result;
    },

    getCurrentAttacksThisTurn: function() {
        return this.get('currentAttacksThisTurn');
    },

    setCurrentAttacksThisTurn: function(currentAttacksThisTurn) {
        this.set('currentAttacksThisTurn', currentAttacksThisTurn);
    },

    modifyCurrentAttacksThisTurn: function(delta) {
        this.setCurrentAttacksThisTurn(this.getCurrentAttacksThisTurn() + delta);
    },

    isAsleep: function() {
        return this.get('isAsleep');
    },

    setIsAsleep: function(isAsleep) {
        this.set('isAsleep', isAsleep);
    },

    isDiscarded: function() {
        return this.get('isDiscarded');
    },

    setIsDiscarded: function(isDiscarded) {
        this.set('isDiscarded', isDiscarded);
    },

    isFrozen: function() {
        return this.get('isFrozen');
    },

    setIsFrozen: function(isFrozen) {
        this.set('isFrozen', isFrozen);
    },

    isImmune: function() {
        return this.get('isImmune');
    },

    setIsImmune: function(isImmune) {
        this.set('isImmune', isImmune);
    },

    isSilenced: function() {
        return this.get('isSilenced');
    },

    setIsSilenced: function(isSilenced) {
        this.set('isSilenced', isSilenced);
    },

    hasCharge: function() {
        return this.get('hasCharge');
    },

    setHasCharge: function(hasCharge) {
        this.set('hasCharge', hasCharge);
    },

    hasDeathrattle: function() {
        return this.get('hasDeathrattle');
    },

    setHasDeathrattle: function(hasDeathrattle) {
        this.set('hasDeathrattle', hasDeathrattle);
    },

    hasDivineShield: function() {
        return this.get('hasDivineShield');
    },

    setHasDivineShield: function(hasDivineShield) {
        this.set('hasDivineShield', hasDivineShield);
    },

    hasEffectTrigger: function() {
        return this.get('hasEffectTrigger');
    },

    setHasEffectTrigger: function(hasEffectTrigger) {
        this.set('hasEffectTrigger', hasEffectTrigger);
    },

    hasStealth: function() {
        return this.get('hasStealth');
    },

    setHasStealth: function(hasStealth) {
        this.set('hasStealth', hasStealth);
    },

    hasTaunt: function() {
        return this.get('hasTaunt');
    },

    setHasTaunt: function(hasTaunt) {
        this.set('hasTaunt', hasTaunt);
    },

    hasWindfury: function() {
        return this.get('hasWindfury');
    },

    setHasWindfury: function(hasWindfury) {
        this.set('hasWindfury', hasWindfury);
    },

    getEffects: function() {
        return this.get('effects');
    },

    getBuffs: function() {
        return this.get('buffs');
    },

    hasSecretEffect: function() {
        return this.getEffects().some(function(effect) {
            return _.result(effect, 'hasSecret');
        });
    },

    hasChooseOneEffect: function() {
        return this.getEffects().some(function(effect) {
            return _.result(effect, 'hasChooseOne');
        });
    },

    getGame: function() {
        return this.getOwner().getGame();
    },

    getCurrentArmor: function() {
        return this.getOwner().getCurrentArmor();
    },
    
    moveTo: function(destination, destinationIndex) {
        var player = this.getOwner();
        var game = player.getGame();

        var source = this.getLocation();

        var sourceVar, sourceObject;
        if ((sourceVar = player.get(source)) !== undefined) {
            sourceObject = player;
        } else if ((sourceVar = game.get(source)) !== undefined) {
            sourceObject = game;
        }

        if (source === 'created') {
            // no need to remove it from somewhere
        } else if (sourceVar === undefined) {
            throw new Error('Unknown source "' + source + '"');
        } else if (sourceVar instanceof Collection) {
            var sourceIndex = sourceVar.indexOf(this);
            if (sourceIndex < 0) {
                throw new Error('Unable to find source');
            }

            sourceVar.remove(this);
        } else if (sourceVar === this) {
            sourceObject.set(source, null);
        } else {
            throw new Error('Unexpected source "' + source + '"');
        }

        var destinationVar, destinationObject;
        if ((destinationVar = player.get(destination)) !== undefined) {
            destinationObject = player;
        } else if ((destinationVar = game.get(destination)) !== undefined) {
            destinationObject = game;
        }

        if (destinationVar === undefined) {
            throw new Error('Unknown destination "' + destination + '"');
        } else if (destinationVar instanceof Collection) {
            if (destinationIndex === undefined) {
                destinationIndex = destinationVar.length;
            }

            destinationVar.add(this, {at: destinationIndex});
        } else {
            destinationObject.set(destination, this);
        }

        if (this.isMinion() && ((destination === 'drawPile') || (destination === 'hand') || (destination === 'discardPile'))) {
            this.reset();
        }
        if (destination === 'discardPile') {
            this.setIsDiscarded(true);
        }

        this.setLocation(destination);

        this.getGame().trigger('didMoveCard', {
            player: player,
            card: this,
            source: source,
            destination: destination,
            destinationIndex: destinationIndex
        });
    },

    checkCanPlay: function(target) {
        var info = {
            player: this.getOwner(),
            card: this,
            location: this.getLocation(),
            cost: this.getBaseCost(),
            targetCard: target,
            targetLocation: target && target.getLocation(),
            failReason: null,
            combo: this.getGame().getCurrentPlaysThisTurn() > 0,
            data: {}
        };

        if (info.card.isMinion()) {
            if (info.location === 'hand') {
                info.battlecry = true;
            }
            if (info.targetCard && info.targetCard.isTargetable() && info.card.canAttack()) {
                info.attack = true;
            }
        }

        if (!info.failReason && info.attack) {
            if (this.isAsleep()) {
                info.failReason = 'Card is asleep';
            } else if (this.getCurrentAttacksThisTurn() >= this.getMaxAttacksThisTurn()) {
                info.failReason = 'Card has been played';
            }
        }

        if (!info.failReason && this.isFrozen()) {
            info.failReason = 'Card is frozen';
        }

        if (!info.failReason && info.targetCard) {
            if (info.targetCard.hasStealth()) {
                info.failReason = 'Cannot target stealth minion';
            } else if (!info.targetCard.isTargetable()) {
                info.failReason = 'Invalid target';
            }
        }

        var needsTarget, i, n;
        if (!info.failReason) {
            if ((info.location === 'battlefield') || (info.location === 'hero')) {
                needsTarget = true;

                if (info.targetCard && (info.targetCard.getOwner() === info.player)) {
                    info.failReason = 'Must target either opponent battlefield or hero';
                }
            } else {
                needsTarget = false;

                var effects = this.getEffects();
                for (i = 0, n = effects.length; i < n; i++) {
                    var effect = effects.at(i);

                    var effectNeedsTarget = _.result(effect, 'needsTarget');
                    needsTarget = needsTarget || effectNeedsTarget;

                    if (effectNeedsTarget && !info.targetCard) {
                        break;
                    }

                    var result;
                    if (!_.isFunction(effect.canCast)) {
                        result = effect.canCast;
                    } else if (effectNeedsTarget) {
                        result = effect.canCast(info.targetCard, info);
                    } else {
                        result = effect.canCast(info);
                    }

                    if (!info.failReason && (result !== undefined)) {
                        if (_.isString(result)) {
                            info.failReason = result;
                        } else if (!result) {
                            info.failReason = 'Cannot cast "' + effect.getId() + '"';
                        }
                    }
                }
            }
        }

        if (!info.failReason && needsTarget && !info.targetCard) {
            info.failReason = 'Card needs target';
        }

        if (!info.failReason) {
            this.getGame().trigger('canPlayCard', info);
        }

        if ((info.location !== 'hand') && (info.location !== 'heroPower')) {
            info.cost = 0;
        }

        if (!info.failReason && (info.cost > this.getOwner().getCurrentMana())) {
            info.failReason = 'Too expensive';
        }

        if (!info.failReason && info.targetCard) {
            if (!needsTarget) {
                info.failReason = 'Card cannot target something';
            } else if (info.card.isSpell()) {
                // valid target
            } else if (info.card.isHeroPower()) {
                // valid target
            } else if (info.targetCard.getOwner() === this.getOwner()) {
                // valid target
            } else if (info.targetCard !== target) {
                // valid target
            } else if (info.targetCard.hasTaunt()) {
                // valid target
            } else {
                var battlefield = info.targetCard.getOwner().getBattlefield();
                for (i = 0, n = battlefield.length; i < n; i++) {
                    var card = battlefield.at(i);
                    if (card.hasTaunt()) {
                        info.failReason = 'Must attack a minion with taunt';
                    }
                }
            }
        }

        if (info.card !== this) {
            throw new Error('Card must not be changed');
        }
        if (info.location !== this.getLocation()) {
            throw new Error('Card must not be moved');
        }

        return info;
    },

    canPlay: function(target) {
        if (_.isNumber(target)) {
            target = null;
        }

        var info = this.checkCanPlay(target);
        return info.failReason;
    },

    play: function(target, battlefieldIndex) {
        if (battlefieldIndex === undefined) {
            if (_.isNumber(target)) {
                battlefieldIndex = target;
                target = null;
            } else {
                battlefieldIndex = this.getOwner().getBattlefield().length;
            }
        }

        var info = this.checkCanPlay(target);
        if (info.failReason) {
            throw new Error(this.getName() + ' (' + this.getCardData().effectId + '): ' + info.failReason);
        }

        var game = this.getGame();

        game.trigger('willPlayCard', info);

        var sourceAttack, targetAttack;
        if ((info.location === 'hand') || (info.location === 'spawningCards')) {
            if (this.hasSecretEffect()) {
                this.moveTo('secrets');

                this.castEffects(info);
            } else if (this.hasChooseOneEffect()) {
                this.castEffects(info);

                this.moveTo('discardPile');
            } else {
                if (info.location !== 'spawningCards') {
                    this.moveTo('playedCard');
                }

                if (this.isMinion()) {
                    if (!this.hasCharge()) {
                        this.setIsAsleep(true);
                    }

                    this.moveTo('battlefield', battlefieldIndex);

                    this.castEffects(info);
                } else if (this.isWeapon()) {
                    this.moveTo('weapon');

                    this.castEffects(info);
                } else if (this.isAbility()) {
                    this.castEffects(info);

                    this.moveTo('discardPile');
                } else {
                    throw new Error('Unexpected card "' + this.toString(true) + '"');
                }
            }
        } else if (info.location === 'battlefield') {
            sourceAttack = this.getCurrentAttack();
            targetAttack = info.targetCard.getCurrentAttack();

            info.targetCard.dealDamage(sourceAttack, this);
            this.dealDamage(targetAttack, info.targetCard);

            this.modifyCurrentAttacksThisTurn(1);
        } else if (info.location === 'hero') {
            sourceAttack = this.getCurrentAttack();
            targetAttack = info.targetCard.getCurrentAttack();

            var weapon = this.getOwner().getWeapon();

            info.targetCard.dealDamage(sourceAttack, this);
            this.dealDamage(targetAttack, info.targetCard);
            if (weapon) {
                weapon.dealDamage(1, info.targetCard);
            }

            this.modifyCurrentAttacksThisTurn(1);
        } else if (info.location === 'heroPower') {
            this.modifyCurrentAttacksThisTurn(1);

            this.castEffects(info);
        } else {
            throw new Error('Unexpected card location "' + info.location + '"');
        }

        if (info.cost > 0) {
            this.getOwner().modifyCurrentMana(-info.cost);
        }

        if (info.location === 'hand') {
            game.trigger('didPlayCardFromHand', info);
        }
        
        game.trigger('didPlayCard', info);

        game.handleKilledCards();

        game.modifyCurrentPlaysThisTurn(1);
    },

    reset: function() {
        var info = {
            card: this
        };

        this.getGame().trigger('willResetCard', info);

        var buffs = this.getBuffs().toArray();
        _.forEach(buffs, function(buff) {
            buff.uncast();
        });
        
        var effects = this.getEffects().toArray();
        _.forEach(effects, function(effect) {
            effect.reset();
        });

        this.setDamage(0);

        var attack = this.getBaseAttack();
        this.setCurrentAttack(attack);

        var health = this.getBaseHealth();
        this.setMaxHealth(health);

        this.setCurrentAttacksThisTurn(0);
        this.setIsAsleep(false);
        this.setIsDiscarded(false);
        this.setIsFrozen(false);
        this.setIsImmune(false);
        this.setHasCharge(false);
        this.setHasDeathrattle(false);
        this.setHasDivineShield(false);
        this.setHasEffectTrigger(false);
        this.setHasStealth(false);
        this.setHasTaunt(false);
        this.setHasWindfury(false);
    },

    silence: function() {
        this.reset();

        var effects = this.getEffects();
        effects.reset([]);

        this.setIsSilenced(true);
    },

    dealDamage: function(damage, source) {
        if (damage === 0) {
            // nop
        } else if (this.isImmune()) {
            // nop
        } else if (this.hasDivineShield()) {
            this.setDivineShield(false);
        } else {
            var remainingDamage = damage;

            if (this.isHero()) {
                var owner = this.getOwner();
                var oldArmor = owner.getCurrentArmor();
                if (oldArmor > 0) {
                    var newArmor = Math.max(oldArmor - remainingDamage, 0);
                    owner.setCurrentArmor(newArmor);

                    remainingDamage -= (oldArmor - newArmor);
                }
            }

            this.modifyDamage(remainingDamage);

            this.getGame().trigger('didDealDamage', {
                card: this,
                damage: damage,
                source: source
            });
        }
    },

    healDamage: function(heal, source) {
        var effectiveHeal = Math.min(heal, this.getDamage());

        if (effectiveHeal > 0) {
            this.modifyDamage(-effectiveHeal);

            this.getGame().trigger('didHealDamage', {
                card: this,
                heal: heal,
                source: source,
                effectiveHeal: effectiveHeal
            });
        }
    },

    kill: function(source) {
        var damage = this.getCurrentHealth();
        this.dealDamage(damage, source);
    },

    castEffects: function(info) {
        var effects = this.getEffects();
        for (var i = 0, n = effects.length; i < n; i++) {
            var effect = effects.at(i);
            var effectNeedsTarget = _.result(effect, 'needsTarget');
            if (effectNeedsTarget) {
                effect.cast(info.targetCard, info);
            } else {
                effect.cast(info);
            }
        }
    },

    triggerSecret: function(source) {
        this.moveTo('playedCard');

        this.getGame().trigger('didTriggerSecret', {
            owner: this.getOwner(),
            card: this,
            source: source
        });

        this.moveTo('discardPile');
    },

    transformTo: function(card) {
        var attributes = _.clone(card.attributes);
        delete attributes.owner;
        delete attributes.location;

        this.reset();

        this.set(attributes);
    }

});



module.exports = GameCard;
