/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var _ = require('underscore');


var Ruhestein = require('ruhestein');



var outputGameState = function(game, skipOpponentState) {
    var lines = [];

    var appendCardLine = function(card, prefix, showCost) {
        var line = prefix;
        if (card) {
            if (showCost) {
                line += '(' + card.getBaseCost() + ') ';
            }
            if ((card.getCurrentAttack() > 0) || (card.getCurrentHealth() > 0)) {
                line += card.getCurrentAttack() + '/' + card.getCurrentHealth() + ' ';
            }
            if (card.getType() === 'hero') {
                var armor;
                if (card === game.getHero()) {
                    armor = game.getCurrentArmor();
                } else if (card === game.getOpponentHero()) {
                    armor = game.getOpponentCurrentArmor();
                }
                if (armor) {
                    line += '[' + armor + '] ';
                }
            }
            line += card.getName() + ': ' + card.getDescription();
        } else {
            line += '---';
        }
        lines.push(line);
    };

    var appendCardCollectionLines = function(property, firstPrefix, otherPrefixes, showCost) {
        var modelName;
        if (property === 'Secrets') {
            modelName = 'Secret';
        } else {
            modelName = property + 'Card';
        }

        var getCardCount = game ['get' + modelName + 'Count'].bind(game);
        var getCard = game ['get' + modelName].bind(game);

        var i, n = getCardCount();
        if (n > 0) {
            for (i = 0; i < n; i++) {
                var card = getCard(i);
                var prefix = (i === 0) ? firstPrefix : otherPrefixes;
                prefix += i + '. ';
                appendCardLine(card, prefix, showCost);
            }
        } else {
            appendCardLine(null, firstPrefix, showCost);
        }
    };

    if (!skipOpponentState) {
        lines.push(game.getOpponentAccountName() + ':');
        lines.push('    Mana       : ' + game.getOpponentCurrentMana() + '/' + game.getOpponentMaxMana());
        appendCardLine(game.getOpponentHero(),      '    Hero       : ');
        appendCardLine(game.getOpponentHeroPower(), '    Hero Power : ', true);
        appendCardLine(game.getOpponentWeapon(),    '    Weapon     : ');
        lines.push('    #Secrets   : ' + game.getOpponentSecretCount());
        lines.push('    #Draw Cards: ' + game.getOpponentDrawPileCardCount());
        lines.push('    #Hand Cards: ' + game.getOpponentHandCardCount());
        lines.push('');
        appendCardCollectionLines('OpponentBattlefield', '    Battlefield: ', '                 ');
        lines.push('');
        lines.push('');
    }

    lines.push(game.getAccountName() + ':');
    lines.push('    Mana       : ' + game.getCurrentMana() + '/' + game.getMaxMana());
    appendCardLine(game.getHero(),      '    Hero       : ');
    appendCardLine(game.getHeroPower(), '    Hero Power : ', true);
    appendCardLine(game.getWeapon(),    '    Weapon     : ');
    appendCardCollectionLines('Secrets', '    Secrets    : ', '                 ');
    lines.push('    #Draw Cards: ' + game.getDrawPileCardCount());
    lines.push('');
    appendCardCollectionLines('Battlefield', '    Battlefield: ', '                 ');
    lines.push('');
    appendCardCollectionLines('Hand', '    Hand       : ', '                 ', true);

    console.log(lines.join('\n'));
};



var setMana = function(player, current, max) {
    player.setBaseMana(max);
    player.setMaxMana(max);
    player.setCurrentMana(current);
};



var setHealth = function(player, current, max) {
    var hero = player.getHero();
    hero.setMaxHealth(max);
    hero.setDamage(max - current);
};



var discardHandCardsNamed = function(player, name) {
    var card, hand = player.getHand();
    while (true) {
        if (hand.length === 0) {
            player.drawCard();

            if (hand.length === 0) {
                break;
            }
        }

        card = hand.at(0);
        if (card.getName() !== name) {
            break;
        }

        card.moveTo('discardPile');
    }
};



var playHandCards = function(player, count) {
    var i, card, hand = player.getHand();
    for (i = hand.length - 1; i >= 0; i--) {
        card = hand.at(i);
        if (card.getName() === 'The Coin') {
            card.play(null);
        }
    }

    for (i = 0; i < count; i++) {
        if (player.getHand().length === 0) {
            player.drawCard();
        }

        setMana(player, 10, 10);

        card = player.getHand().at(0);
        card.play(null);
    }
};



var drawUntilHandCardCountEquals = function(player, handCardCount) {
    var delta = handCardCount - player.getHand().length;
    if (delta > 0) {
        player.drawCards(delta);
    }
};



var cardRegExp = /^(?:\(([0-9]+)\)[\s]*)?(?:([0-9]+)\/([0-9]+)[\s]*)?(?:\[([0-9]+)\][\s]*)?([^;\[\]{}()\/]+)?(?:;[\s]*([^{}]+))?(?:{([^}]+)})?$/;

var expectCard = function(card, expectedName) {
    var actualName, name;
    if (card) {
        actualName = card.toString('full');
        var actualMd = cardRegExp.exec(actualName);
        if (!actualMd) {
            throw new Error('Unexpected card info "' + actualName + '"');
        }

        var expectedMd = cardRegExp.exec(expectedName);
        if (!expectedMd) {
            throw new Error('Unexpected card info "' + expectedName + '"');
        }
        
        name = '';
        if (expectedMd [1] !== undefined) {
            name += '(' + (actualMd [1] || 0) + ')';
        }
        if ((expectedMd [2] !== undefined) && (expectedMd [3] !== undefined)) {
            if (name) {
                name += ' ';
            }
            name += (actualMd [2] || 0) + '/' + (actualMd [3] || 0);
        }
        if ((expectedMd [4] !== undefined) && card.isHero()) {
            if (name) {
                name += ' ';
            }
            name += '[' + (actualMd [4] || 0) + ']';
        }
        if (expectedMd [5] !== undefined) {
            if (name) {
                name += ' ';
            }
            name += (actualMd [5] || '???');
        }
        if (expectedMd [6] !== undefined) {
            name += '; ' + (actualMd [6] || '???');
        }
        if (expectedMd [7] !== undefined) {
            if (name) {
                name += ' ';
            }
            name += '{' + (actualMd [7] || '???') + '}';
        }
    } else {
        actualName = name = card;
    }

    if (name === expectedName) {
        expect(name).to.equal(expectedName);
    } else {
        expect(actualName).to.equal(expectedName);
    }
};



module.exports = {

    outputGameState: outputGameState,

    setMana: setMana,
    setHealth: setHealth,

    discardHandCardsNamed: discardHandCardsNamed,
    playHandCards: playHandCards,
    drawUntilHandCardCountEquals: drawUntilHandCardCountEquals,

    expectCard: expectCard

};
