/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var utils = require('../../common/lib/utils');

var Model = require('./base/model');



var Buff = Model.extend({

    defaults: function() {
        return {

            effect: null,

            card: null,

            isCast: false,

            stacks: 0

        };
    },

    getEffect: function() {
        return this.get('effect');
    },

    getCard: function() {
        return this.get('card');
    },

    isCast: function() {
        return this.get('isCast');
    },

    setIsCast: function(isCast) {
        this.set('isCast', isCast);
    },

    getStacks: function() {
        return this.get('stacks');
    },

    setStacks: function(stacks) {
        stacks = utils.cap(stacks, 0, 10000);

        var effect = this.getEffect(), card = this.getCard();

        var currentStacks = this.getStacks();
        while (currentStacks < stacks) {
            effect.castBuff(card);
            currentStacks++;
        }
        while (currentStacks > stacks) {
            effect.uncastBuff(card);
            currentStacks--;
        }
        
        this.set('stacks', stacks);
    },

    modifyStacks: function(delta) {
        this.setStacks(this.getStacks() + delta);
    },


    /*
     * Casts the effect's buff on the card.
     *
     * If uncastOnEffectReset is truthy the buff will be automatically removed whenever the effect is reseted (e.g. when its card is removed from the battlefield).
     */
    cast: function(uncastOnEffectReset) {
        var effect = this.getEffect(), card = this.getCard();

        if (uncastOnEffectReset) {
            effect.getCastedBuffs().add(this);
        }
        if (card) {
            card.getBuffs().add(this);
        }

        this.setIsCast(true);

        this.setStacks(1);
    },

    /*
     * Uncasts the effect's buff if it was casted before.
     */
    uncast: function() {
        if (this.isCast()) {
            var effect = this.getEffect(), card = this.getCard();

            this.setStacks(0);

            this.setIsCast(false);

            if (card) {
                card.getBuffs().remove(this);
            }

            effect.getCastedBuffs().remove(this);
        }
    }

});



module.exports = Buff;
