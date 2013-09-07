/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Model = require('./base/model');



var Buff = Model.extend({

    defaults: function() {
        return {

            effect: null,

            card: null,

            isCast: false

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

        effect.castBuff(card);
    },

    /*
     * Uncasts the effect's buff if it was casted before.
     */
    uncast: function() {
        if (this.isCast()) {
            var effect = this.getEffect(), card = this.getCard();

            effect.uncastBuff(card);

            this.setIsCast(false);

            if (card) {
                card.getBuffs().remove(this);
            }

            effect.getCastedBuffs().remove(this);
        }
    }

});



module.exports = Buff;
