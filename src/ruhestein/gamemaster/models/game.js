/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');


var utils = require('../../common/lib/utils');

var Model = require('./base/model');
var Collection = require('./base/collection');

var Player = require('./player');



var Game = Model.extend({

    defaults: function() {
        return {

            player1: null,

            player2: null,

            currentPlayer: null,

            transitioningCards: new Collection(),

            playedCard: null,

            spawningCards: new Collection(),

            killedCard: null,

            currentPlaysThisTurn: 0

        };
    },

    getPlayer1: function() {
        return this.get('player1');
    },

    getPlayer2: function() {
        return this.get('player2');
    },

    getCurrentPlayer: function() {
        return this.get('currentPlayer');
    },

    setCurrentPlayer: function(currentPlayer) {
        this.set('currentPlayer', currentPlayer);
    },

    getTransitioningCards: function() {
        return this.get('transitioningCards');
    },

    getPlayedCard: function() {
        return this.get('playedCard');
    },

    setPlayedCard: function(card) {
        this.set('playedCard', card);
    },

    getSpawningCards: function() {
        return this.get('spawningCards');
    },

    getKilledCard: function() {
        return this.get('killedCard');
    },

    setKilledCard: function(card) {
        this.set('killedCard', card);
    },

    getCurrentPlaysThisTurn: function() {
        return this.get('currentPlaysThisTurn');
    },

    setCurrentPlaysThisTurn: function(currentPlaysThisTurn) {
        this.set('currentPlaysThisTurn', currentPlaysThisTurn);
    },

    modifyCurrentPlaysThisTurn: function(delta) {
        this.setCurrentPlaysThisTurn(this.getCurrentPlaysThisTurn() + delta);
    },

    getOpponent: function(player) {
        var player1 = this.getPlayer1(), player2 = this.getPlayer2(), opponent;
        if (player === player1) {
            opponent = player2;
        } else if (player === player2) {
            opponent = player1;
        } else {
            throw new Error('Unexpected player');
        }
        return opponent;
    },

    join: function(deck) {
        var player1 = this.getPlayer1(), player2 = this.getPlayer2(), player;
        var account = deck.getOwner();

        if ((player1 && (player1.getAccount() === account)) || (player2 && (player2.getAccount() === account))) {
            throw new Error('This player already joined');
        } else if (player1 && player2) {
            throw new Error('This game has already two players');
        } else {
            player = new Player({
                account: account,
                game: this
            });

            var card = player.createCardFromFilter({
                type: 'hero',
                'class': deck.getClass(),
                set: 'basic'
            });
            card.moveTo('hero');

            card = player.createCardFromFilter({
                type: 'heroPower',
                'class': deck.getClass(),
                set: 'basic'
            });
            card.moveTo('heroPower');

            var deckCards = deck.getCards();
            for (var i = 0; i < deckCards.length; i++) {
                var deckCard = deckCards.at(i);
                var cardId = deckCard.getId();
                var drawPileCard = player.createCardById(cardId);
                drawPileCard.moveTo('drawPile');
            }

            if (!player1) {
                this.set('player1', player);
            } else {
                this.set('player2', player);
            }
        }

        return player;
    },

    startGame: function() {
        var _this = this;

        var player1 = this.getPlayer1(), player2 = this.getPlayer2();

        var startingPlayerNr = this.roll(2);

        var firstPlayer, secondPlayer;
        if (startingPlayerNr === 1) {
            firstPlayer = player1;
            secondPlayer = player2;
        } else {
            firstPlayer = player2;
            secondPlayer = player1;
        }

        this.setCurrentPlayer(firstPlayer);

        var playersConfirmed = 0;

        var playerDidConfirmCardChoice = function(player, cards) {
            var hand = player.getHand();

            var rejectedCards = 0, card;
            for (var i = hand.length - 1; i >= 0; i--) {
                card = hand.at(i);
                var index = cards.indexOf(card);
                if (index < 0) {
                    card.moveTo('drawPile');
                    rejectedCards++;
                }
            }

            player.shuffleDrawPile();

            if (rejectedCards > 0) {
                player.drawCards(rejectedCards);
            }

            if (++playersConfirmed === 2) {
                card = secondPlayer.createCardFromFilter({
                    name: 'The Coin',
                    isToken: true
                });
                card.moveTo('hand');

                _this.startTurn(_this.getCurrentPlayer());
            }
        };

        firstPlayer.shuffleDrawPile();
        firstPlayer.drawCards(3);
        firstPlayer.requestCardChoice(firstPlayer.getHand(), 0, 3, 'startingHand', function(cards) {
            playerDidConfirmCardChoice(firstPlayer, cards);
        });

        secondPlayer.shuffleDrawPile();
        secondPlayer.drawCards(4);
        secondPlayer.requestCardChoice(secondPlayer.getHand(), 0, 4, 'startingHand', function(cards) {
            playerDidConfirmCardChoice(secondPlayer, cards);
        });
    },

    startTurn: function(nextPlayer) {
        this.setCurrentPlayer(nextPlayer);

        this.setCurrentPlaysThisTurn(0);
        
        nextPlayer.getBattlefield().forEach(function(card) {
            card.setCurrentAttacksThisTurn(0);
            card.setIsAsleep(false);
        });

        var overloadMana = nextPlayer.getOverloadMana();
        nextPlayer.setOverloadMana(0);

        var baseMana = nextPlayer.getBaseMana();
        if (baseMana < 10) {
            nextPlayer.setBaseMana(++baseMana);
        }
        nextPlayer.setMaxMana(baseMana);
        nextPlayer.setCurrentMana(baseMana - overloadMana);

        nextPlayer.drawCard();

        this.trigger('didStartTurn', {
            player: nextPlayer
        });

        this.handleKilledCards();
    },

    endTurn: function(player) {
        if (player === this.getCurrentPlayer()) {
            this.handleKilledCards();

            var cards = player.collectCardsByLocation('hero,heroPower,battlefield');
            
            cards.forEach(function(card) {
                card.setCurrentAttacksThisTurn(0);
                card.setIsAsleep(false);
                card.setIsFrozen(false);
            });

            var nextPlayer = player.getOpponent();

            this.trigger('didEndTurn', {
                player: player
            });

            this.handleKilledCards();

            this.startTurn(nextPlayer);
        }
    },

    endGame: function(winner) {
        var looser = winner && winner.getOpponent();

        this.trigger('didEndGame', {
            winner: winner,
            looser: looser
        });
    },

    handleKilledCards: function() {
        var player1 = this.getPlayer1(), player2 = this.getPlayer2();

        var oldTargetLength = 0;

        while (true) {
            var targets = player1.collectCardsByLocation([
                'hero',
                'weapon',
                'battlefield',
                'opponentHero',
                'opponentWeapon',
                'opponentBattlefield'
            ]);

            if (oldTargetLength === targets.length) {
                break;
            }

            oldTargetLength = targets.length;

            for (var i = 0, n = targets.length; i < n; i++) {
                var card = targets.at(i);

                var health = card.getCurrentHealth();
                if (health <= 0) {
                    var owner = card.getOwner();
                    var location = card.getLocation();

                    card.moveTo('killedCard');

                    this.trigger('didKillCard', {
                        owner: owner,
                        card: card,
                        location: location
                    });

                    if (card.getLocation() !== 'killedCard') {
                        // already handled
                    } else {
                        card.moveTo('discardPile');
                    }
                }
            }
        }

        var hero1 = player1.getHero(), hero2 = player2.getHero();
        if (!hero1 && !hero2) {
            this.endGame(null);
        } else if (hero1 && !hero2) {
            this.endGame(player1);
        } else if (!hero1 && hero2) {
            this.endGame(player2);
        }
    },

    roll: function(max) {
        return utils.roll(max);
    },

    chance: function(percent) {
        return (this.roll(100) <= percent);
    },

    randomShuffleOrder: function(count) {
        var order = [];
        for (var i = 0; i < count; i++) {
            order [i] = Math.random();
        }
        return order;
    }

});



module.exports = Game;
