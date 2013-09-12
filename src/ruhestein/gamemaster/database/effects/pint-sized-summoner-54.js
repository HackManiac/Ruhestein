/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 2/2 Pint-Sized Summoner; The first minion you play each turn costs (2) less.

var PintSizedSummoner54 = {

    getDescription: function() {
        return this.formatDescription('The first minion you play each turn costs (2) less.');
    },

    cast: function() {
        var _this = this;

        var effectIsActive = false;

        var getCards = function() {
            if (effectIsActive) {
                return _this.collectCardsByLocation('hand', function(card) {
                    return card.isMinion();
                });
            } else {
                return [];
            }
        };

        var updateCards = this.buffCards(getCards);

        var didStartTurn = function() {
            effectIsActive = true;
            updateCards();
        };

        var uncast = function() {
            effectIsActive = false;
            updateCards();
        };

        var didPlayCard = function(info) {
            if (info.battlecry && (info.player === _this.getPlayer()) && info.card.isMinion()) {
                uncast();
            }
        };

        this.onStartOfPlayerTurn(didStartTurn);
        this.onEndOfPlayerTurn(uncast);
        this.listenToGame('didPlayCard', didPlayCard);
    },

    castBuff: function(target, buff) {
        var originalCost = target.getCurrentCost();
        target.modifyCurrentCost(-2);
        buff._delta = originalCost - target.getCurrentCost();
    },

    uncastBuff: function(target, buff) {
        target.modifyCurrentCost(buff._delta);
    }

};



exports.PintSizedSummoner54 = PintSizedSummoner54;
