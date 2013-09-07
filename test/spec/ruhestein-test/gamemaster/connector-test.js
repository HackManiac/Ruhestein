/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Connector', function() {

    var gm = Ruhestein.gameMaster;

    var GmAccount = gm.Account;

    var GmGame = gm.Game;

    var Connector = gm.Connector;

    it('should be a function', function() {
        expect(Connector).to.be.a('function');
    });

    var setupConnector = function() {
        var ctx = {};

        ctx.gmAccount1 = new GmAccount({

            accountName: 'Player1',

        });

        ctx.gmAccount2 = new GmAccount({

            accountName: 'Player2',

        });

        ctx.gmDeck1 = ctx.gmAccount1.createDeckFromCockatriceExport('Test', 'druid', '30 Wisp');
        ctx.gmDeck2 = ctx.gmAccount2.createDeckFromCockatriceExport('Test', 'rogue', '30 Wisp');

        ctx.gmGame = new GmGame();

        ctx.gmPlayer1 = ctx.gmGame.join(ctx.gmDeck1);
        ctx.gmPlayer2 = ctx.gmGame.join(ctx.gmDeck2);

        ctx.connector = new Connector(ctx.gmPlayer1);

        ctx.gcGame1 = ctx.connector.getGcGame();

        return ctx;
    };

    var cardRegExp = /^(?:\(([0-9]+)\)[\s]*)?(?:([0-9]+)\/([0-9]+)[\s]*)?(?:\[([0-9]+)\][\s]*)?([^:\[\]{}()\/]+)?(?::[\s]*[^{}]+)?(?:{([^}]+)})?$/;

    var expectCard = function(card, expectedName) {
        var name;
        if (card) {
            name = '';
            var md = cardRegExp.exec(expectedName);
            if (md [1] !== undefined) {
                name += '(' + card.getBaseCost() + ')';
            }
            if ((md [2] !== undefined) && (md [3] !== undefined)) {
                if (name) {
                    name += ' ';
                }
                name += card.getCurrentAttack() + '/' + card.getCurrentHealth();
            }
            if ((md [4] !== undefined) && card.isHero()) {
                if (name) {
                    name += ' ';
                }
                name += '[' + card.getOwner().getCurrentArmor() + ']';
            }
            if (md [5] !== undefined) {
                if (name) {
                    name += ' ';
                }
                name += card.getName();
            }
            if (md [6] !== undefined) {
                var attributes = [];  // FIXME
                if (name) {
                    name += ' ';
                }
                name += '{' + attributes.join(',') + '}';
            }
        } else {
            name = card;
        }

        expect(name).to.equal(expectedName);
    };

    describe('Sync Player -> Game', function() {

        var ctx;

        before(function() {
            ctx = setupConnector();
        });

        it('should sync accountName correctly', function() {
            expect(ctx.gmPlayer1.getAccountName()).to.equal('Player1');
            expect(ctx.gcGame1.getAccountName()).to.equal('Player1');
        });

        it('should sync maxMana correctly', function() {
            expect(ctx.gmPlayer1.getMaxMana()).to.equal(0);
            expect(ctx.gcGame1.getMaxMana()).to.equal(0);

            ctx.gmPlayer1.setMaxMana(10);

            expect(ctx.gmPlayer1.getMaxMana()).to.equal(10);
            expect(ctx.gcGame1.getMaxMana()).to.equal(10);
        });

        it('should sync currentMana correctly', function() {
            expect(ctx.gmPlayer1.getCurrentMana()).to.equal(0);
            expect(ctx.gcGame1.getCurrentMana()).to.equal(0);

            ctx.gmPlayer1.setCurrentMana(10);

            expect(ctx.gmPlayer1.getCurrentMana()).to.equal(10);
            expect(ctx.gcGame1.getCurrentMana()).to.equal(10);
        });

        it('should sync currentArmor correctly', function() {
            expect(ctx.gmPlayer1.getCurrentArmor()).to.equal(0);
            expect(ctx.gcGame1.getCurrentArmor()).to.equal(0);

            ctx.gmPlayer1.setCurrentArmor(10);

            expect(ctx.gmPlayer1.getCurrentArmor()).to.equal(10);
            expect(ctx.gcGame1.getCurrentArmor()).to.equal(10);
        });

        it('should sync spellPower correctly', function() {
            expect(ctx.gmPlayer1.getSpellPower()).to.equal(0);
            expect(ctx.gcGame1.getSpellPower()).to.equal(0);

            ctx.gmPlayer1.setSpellPower(10);

            expect(ctx.gmPlayer1.getSpellPower()).to.equal(10);
            expect(ctx.gcGame1.getSpellPower()).to.equal(10);
        });

        it('should sync hero correctly', function() {
            expectCard(ctx.gmPlayer1.getHero(), '0/30 Malfurion Stormrage');
            expectCard(ctx.gcGame1.getHero(), '0/30 Malfurion Stormrage');
        });

        it('should sync heroPower correctly', function() {
            expectCard(ctx.gmPlayer1.getHeroPower(), 'Shapeshift');
            expectCard(ctx.gcGame1.getHeroPower(), 'Shapeshift');
        });

        it('should sync weapon correctly', function() {
            expectCard(ctx.gmPlayer1.getWeapon(), null);
            expectCard(ctx.gcGame1.getWeapon(), null);

            var card = ctx.gmPlayer1.createCardFromFilter({
                name: 'Truesilver Champion',
                type: 'weapon'
            });
            ctx.gmPlayer1.setWeapon(card);

            expectCard(ctx.gmPlayer1.getWeapon(), 'Truesilver Champion');
            expectCard(ctx.gcGame1.getWeapon(), 'Truesilver Champion');
        });

        it('should sync secrets correctly', function() {
            expect(ctx.gmPlayer1.getSecrets().length).to.equal(0);
            expect(ctx.gcGame1.getSecretCount()).to.equal(0);

            var card = ctx.gmPlayer1.createCardFromFilter({
                name: 'Vaporize',
                type: 'ability'
            });
            ctx.gmPlayer1.getSecrets().add(card);

            expect(ctx.gmPlayer1.getSecrets().length).to.equal(1);
            expectCard(ctx.gmPlayer1.getSecrets().at(0), 'Vaporize');
            expect(ctx.gcGame1.getSecretCount()).to.equal(1);
            expectCard(ctx.gcGame1.getSecret(0), 'Vaporize');
        });

        it('should sync drawPile correctly', function() {
            expect(ctx.gmPlayer1.getDrawPile().length).to.equal(30);
            expect(ctx.gcGame1.getDrawPileCardCount()).to.equal(30);

            var card = ctx.gmPlayer1.createCardFromFilter({
                name: 'Vaporize',
                type: 'ability'
            });
            ctx.gmPlayer1.getDrawPile().unshift(card);

            expect(ctx.gmPlayer1.getDrawPile().length).to.equal(31);
            expectCard(ctx.gmPlayer1.getDrawPile().at(0), 'Vaporize');
            expect(ctx.gcGame1.getDrawPileCardCount()).to.equal(31);
        });

        it('should sync hand correctly', function() {
            expect(ctx.gmPlayer1.getHand().length).to.equal(0);
            expect(ctx.gcGame1.getHandCardCount()).to.equal(0);

            var card = ctx.gmPlayer1.createCardFromFilter({
                name: 'Vaporize',
                type: 'ability'
            });
            ctx.gmPlayer1.getHand().unshift(card);

            expect(ctx.gmPlayer1.getHand().length).to.equal(1);
            expectCard(ctx.gmPlayer1.getHand().at(0), 'Vaporize');
            expect(ctx.gcGame1.getHandCardCount()).to.equal(1);
            expectCard(ctx.gcGame1.getHandCard(0), 'Vaporize');
        });

        it('should sync battlefield correctly', function() {
            expect(ctx.gmPlayer1.getBattlefield().length).to.equal(0);
            expect(ctx.gcGame1.getBattlefieldCardCount()).to.equal(0);

            var card = ctx.gmPlayer1.createCardFromFilter({
                name: 'Wisp',
                type: 'minion'
            });
            ctx.gmPlayer1.getBattlefield().unshift(card);

            expect(ctx.gmPlayer1.getBattlefield().length).to.equal(1);
            expectCard(ctx.gmPlayer1.getBattlefield().at(0), 'Wisp');
            expect(ctx.gcGame1.getBattlefieldCardCount()).to.equal(1);
            expectCard(ctx.gcGame1.getBattlefieldCard(0), 'Wisp');
        });

        it('should sync opponentAccountName correctly', function() {
            expect(ctx.gmPlayer2.getAccountName()).to.equal('Player2');
            expect(ctx.gcGame1.getOpponentAccountName()).to.equal('Player2');
        });

        it('should sync opponentMaxMana correctly', function() {
            expect(ctx.gmPlayer2.getMaxMana()).to.equal(0);
            expect(ctx.gcGame1.getOpponentMaxMana()).to.equal(0);

            ctx.gmPlayer2.setMaxMana(10);

            expect(ctx.gmPlayer2.getMaxMana()).to.equal(10);
            expect(ctx.gcGame1.getOpponentMaxMana()).to.equal(10);
        });

        it('should sync opponentCurrentMana correctly', function() {
            expect(ctx.gmPlayer2.getCurrentMana()).to.equal(0);
            expect(ctx.gcGame1.getOpponentCurrentMana()).to.equal(0);

            ctx.gmPlayer2.setCurrentMana(10);

            expect(ctx.gmPlayer2.getCurrentMana()).to.equal(10);
            expect(ctx.gcGame1.getOpponentCurrentMana()).to.equal(10);
        });

        it('should sync opponentCurrentArmor correctly', function() {
            expect(ctx.gmPlayer2.getCurrentArmor()).to.equal(0);
            expect(ctx.gcGame1.getOpponentCurrentArmor()).to.equal(0);

            ctx.gmPlayer2.setCurrentArmor(10);

            expect(ctx.gmPlayer2.getCurrentArmor()).to.equal(10);
            expect(ctx.gcGame1.getOpponentCurrentArmor()).to.equal(10);
        });

        it('should sync opponentSpellPower correctly', function() {
            expect(ctx.gmPlayer2.getSpellPower()).to.equal(0);
            expect(ctx.gcGame1.getOpponentSpellPower()).to.equal(0);

            ctx.gmPlayer2.setSpellPower(10);

            expect(ctx.gmPlayer2.getSpellPower()).to.equal(10);
            expect(ctx.gcGame1.getOpponentSpellPower()).to.equal(10);
        });

        it('should sync opponentHero correctly', function() {
            expectCard(ctx.gmPlayer2.getHero(), '0/30 Valeera Sanguinar');
            expectCard(ctx.gcGame1.getOpponentHero(), '0/30 Valeera Sanguinar');
        });

        it('should sync opponentHeroPower correctly', function() {
            expectCard(ctx.gmPlayer2.getHeroPower(), 'Dagger Mastery');
            expectCard(ctx.gcGame1.getOpponentHeroPower(), 'Dagger Mastery');
        });

        it('should sync opponentWeapon correctly', function() {
            expectCard(ctx.gmPlayer2.getWeapon(), null);
            expectCard(ctx.gcGame1.getOpponentWeapon(), null);

            var card = ctx.gmPlayer2.createCardFromFilter({
                name: 'Truesilver Champion',
                type: 'weapon'
            });
            ctx.gmPlayer2.setWeapon(card);

            expectCard(ctx.gmPlayer2.getWeapon(), 'Truesilver Champion');
            expectCard(ctx.gcGame1.getOpponentWeapon(), 'Truesilver Champion');
        });

        it('should sync opponentSecrets correctly', function() {
            expect(ctx.gmPlayer2.getSecrets().length).to.equal(0);
            expect(ctx.gcGame1.getOpponentSecretCount()).to.equal(0);

            var card = ctx.gmPlayer2.createCardFromFilter({
                name: 'Vaporize',
                type: 'ability'
            });
            ctx.gmPlayer2.getSecrets().add(card);

            expect(ctx.gmPlayer2.getSecrets().length).to.equal(1);
            expectCard(ctx.gmPlayer2.getSecrets().at(0), 'Vaporize');
            expect(ctx.gcGame1.getOpponentSecretCount()).to.equal(1);
        });

        it('should sync opponentDrawPile correctly', function() {
            expect(ctx.gmPlayer2.getDrawPile().length).to.equal(30);
            expect(ctx.gcGame1.getOpponentDrawPileCardCount()).to.equal(30);

            var card = ctx.gmPlayer2.createCardFromFilter({
                name: 'Vaporize',
                type: 'ability'
            });
            ctx.gmPlayer2.getDrawPile().unshift(card);

            expect(ctx.gmPlayer2.getDrawPile().length).to.equal(31);
            expectCard(ctx.gmPlayer2.getDrawPile().at(0), 'Vaporize');
            expect(ctx.gcGame1.getOpponentDrawPileCardCount()).to.equal(31);
        });

        it('should sync opponentHand correctly', function() {
            expect(ctx.gmPlayer2.getHand().length).to.equal(0);
            expect(ctx.gcGame1.getOpponentHandCardCount()).to.equal(0);

            var card = ctx.gmPlayer2.createCardFromFilter({
                name: 'Vaporize',
                type: 'ability'
            });
            ctx.gmPlayer2.getHand().unshift(card);

            expect(ctx.gmPlayer2.getHand().length).to.equal(1);
            expectCard(ctx.gmPlayer2.getHand().at(0), 'Vaporize');
            expect(ctx.gcGame1.getOpponentHandCardCount()).to.equal(1);
        });

        it('should sync opponentBattlefield correctly', function() {
            expect(ctx.gmPlayer2.getBattlefield().length).to.equal(0);
            expect(ctx.gcGame1.getOpponentBattlefieldCardCount()).to.equal(0);

            var card = ctx.gmPlayer2.createCardFromFilter({
                name: 'Wisp',
                type: 'minion'
            });
            ctx.gmPlayer2.getBattlefield().unshift(card);

            expect(ctx.gmPlayer2.getBattlefield().length).to.equal(1);
            expectCard(ctx.gmPlayer2.getBattlefield().at(0), 'Wisp');
            expect(ctx.gcGame1.getOpponentBattlefieldCardCount()).to.equal(1);
            expectCard(ctx.gcGame1.getOpponentBattlefieldCard(0), 'Wisp');
        });
    });

    describe('Sync Card -> Card', function() {

        var ctx, gmCard, gcCard;

        before(function() {
            ctx = setupConnector();

            gmCard = ctx.gmPlayer1.getHero();
            gcCard = ctx.gcGame1.getHero();
        });

        it('should sync owner correctly', function() {
            var gmCard = ctx.gmPlayer1.createCardFromFilter({
                name: 'Wisp',
                type: 'minion'
            });

            gmCard.setLocation('battlefield');

            ctx.gmPlayer1.getBattlefield().push(gmCard);

            var gcCard = ctx.gcGame1.getBattlefieldCard(0);

            expect(gmCard.getOwner()).to.equal(ctx.gmPlayer1);
            expect(gcCard.getOwner()).to.equal('player');

            gmCard.setOwner(ctx.gmPlayer2);

            expect(gmCard.getOwner()).to.equal(ctx.gmPlayer2);
            expect(gcCard.getOwner()).to.equal('opponent');
        });

        it('should sync location correctly', function() {
            var gmCard = ctx.gmPlayer1.createCardFromFilter({
                name: 'Wisp',
                type: 'minion'
            });

            gmCard.setLocation('battlefield');

            ctx.gmPlayer1.getBattlefield().push(gmCard);

            var gcCard = ctx.gcGame1.getBattlefieldCard(0);

            expect(gmCard.getLocation()).to.equal('battlefield');
            expect(gcCard.getLocation()).to.equal('battlefield');

            gmCard.setLocation('hand');

            expect(gmCard.getLocation()).to.equal('hand');
            expect(gcCard.getLocation()).to.equal('hand');
        });

        it('should sync baseCost correctly', function() {
            expect(gmCard.getBaseCost()).to.equal(0);
            expect(gcCard.getBaseCost()).to.equal(0);

            gmCard.set('baseCost', 10);

            expect(gmCard.getBaseCost()).to.equal(10);
            expect(gcCard.getBaseCost()).to.equal(10);
        });

        it('should sync currentCost correctly', function() {
            expect(gmCard.getCurrentCost()).to.equal(0);
            expect(gcCard.getCurrentCost()).to.equal(0);

            gmCard.setCurrentCost(10);

            expect(gmCard.getCurrentCost()).to.equal(10);
            expect(gcCard.getCurrentCost()).to.equal(10);
        });

        it('should sync baseAttack correctly', function() {
            expect(gmCard.getBaseAttack()).to.equal(0);
            expect(gcCard.getBaseAttack()).to.equal(0);

            gmCard.set('baseAttack', 10);

            expect(gmCard.getBaseAttack()).to.equal(10);
            expect(gcCard.getBaseAttack()).to.equal(10);
        });

        it('should sync currentAttack correctly', function() {
            expect(gmCard.getCurrentAttack()).to.equal(0);
            expect(gcCard.getCurrentAttack()).to.equal(0);

            gmCard.setCurrentAttack(10);

            expect(gmCard.getCurrentAttack()).to.equal(10);
            expect(gcCard.getCurrentAttack()).to.equal(10);
        });

        it('should sync baseHealth correctly', function() {
            expect(gmCard.getBaseHealth()).to.equal(30);
            expect(gcCard.getBaseHealth()).to.equal(30);

            gmCard.set('baseHealth', 10);

            expect(gmCard.getBaseHealth()).to.equal(10);
            expect(gcCard.getBaseHealth()).to.equal(10);
        });

        it('should sync maxHealth correctly', function() {
            expect(gmCard.getMaxHealth()).to.equal(30);
            expect(gcCard.getMaxHealth()).to.equal(30);

            gmCard.setMaxHealth(10);

            expect(gmCard.getMaxHealth()).to.equal(10);
            expect(gcCard.getMaxHealth()).to.equal(10);
        });

        it('should sync damage correctly', function() {
            expect(gmCard.getDamage()).to.equal(0);
            expect(gcCard.getDamage()).to.equal(0);

            gmCard.setDamage(10);

            expect(gmCard.getDamage()).to.equal(10);
            expect(gcCard.getDamage()).to.equal(10);
        });

        it('should sync currentHealth correctly', function() {
            gmCard.setMaxHealth(10);
            gmCard.setDamage(0);

            expect(gmCard.getCurrentHealth()).to.equal(10);
            expect(gcCard.getCurrentHealth()).to.equal(10);

            gmCard.setMaxHealth(5);

            expect(gmCard.getCurrentHealth()).to.equal(5);
            expect(gcCard.getCurrentHealth()).to.equal(5);

            gmCard.setDamage(5);

            expect(gmCard.getCurrentHealth()).to.equal(0);
            expect(gcCard.getCurrentHealth()).to.equal(0);
        });

        it('should sync id correctly', function() {
            expect(gmCard.getId()).to.equal('621-malfurion-stormrage');
            expect(gcCard.getId()).to.equal('621-malfurion-stormrage');

            gmCard.set('id', '621-malfurion-stormrage-ext');

            expect(gmCard.getId()).to.equal('621-malfurion-stormrage-ext');
            expect(gcCard.getId()).to.equal('621-malfurion-stormrage-ext');
        });

        it('should sync name correctly', function() {
            expect(gmCard.getName()).to.equal('Malfurion Stormrage');
            expect(gcCard.getName()).to.equal('Malfurion Stormrage');

            gmCard.set('name', 'Malfurion Stormrage Ext.');

            expect(gmCard.getName()).to.equal('Malfurion Stormrage Ext.');
            expect(gcCard.getName()).to.equal('Malfurion Stormrage Ext.');
        });

        it('should sync type correctly', function() {
            expect(gmCard.getType()).to.equal('hero');
            expect(gcCard.getType()).to.equal('hero');

            gmCard.set('type', 'superHero');

            expect(gmCard.getType()).to.equal('superHero');
            expect(gcCard.getType()).to.equal('superHero');
        });

        it('should sync description correctly', function() {
            expect(gmCard.getDescription()).to.equal('');
            expect(gcCard.getDescription()).to.equal('');

            gmCard.set('description', 'Druid Hero');

            expect(gmCard.getDescription()).to.equal('Druid Hero');
            expect(gcCard.getDescription()).to.equal('Druid Hero');
        });

        it('should sync class correctly', function() {
            expect(gmCard.getClass()).to.equal('druid');
            expect(gcCard.getClass()).to.equal('druid');

            gmCard.set('class', 'superDruid');

            expect(gmCard.getClass()).to.equal('superDruid');
            expect(gcCard.getClass()).to.equal('superDruid');
        });

        it('should sync set correctly', function() {
            expect(gmCard.getSet()).to.equal('basic');
            expect(gcCard.getSet()).to.equal('basic');

            gmCard.set('set', 'superBasic');

            expect(gmCard.getSet()).to.equal('superBasic');
            expect(gcCard.getSet()).to.equal('superBasic');
        });

        it('should sync faction correctly', function() {
            expect(gmCard.getFaction()).to.equal('neutral');
            expect(gcCard.getFaction()).to.equal('neutral');

            gmCard.set('faction', 'alliance');

            expect(gmCard.getFaction()).to.equal('alliance');
            expect(gcCard.getFaction()).to.equal('alliance');
        });

        it('should sync rarity correctly', function() {
            expect(gmCard.getRarity()).to.equal('free');
            expect(gcCard.getRarity()).to.equal('free');

            gmCard.set('rarity', 'superRare');

            expect(gmCard.getRarity()).to.equal('superRare');
            expect(gcCard.getRarity()).to.equal('superRare');
        });

        it('should sync race correctly', function() {
            expect(gmCard.getRace()).to.equal(null);
            expect(gcCard.getRace()).to.equal(null);

            gmCard.set('race', 'nightElf');

            expect(gmCard.getRace()).to.equal('nightElf');
            expect(gcCard.getRace()).to.equal('nightElf');
        });

        it('should sync isToken correctly', function() {
            expect(gmCard.isToken()).to.equal(false);
            expect(gcCard.isToken()).to.equal(false);

            gmCard.set('isToken', true);

            expect(gmCard.isToken()).to.equal(true);
            expect(gcCard.isToken()).to.equal(true);
        });

        it('should sync isAsleep correctly', function() {
            expect(gmCard.isAsleep()).to.equal(false);
            expect(gcCard.isAsleep()).to.equal(false);

            gmCard.setIsAsleep(true);

            expect(gmCard.isAsleep()).to.equal(true);
            expect(gcCard.isAsleep()).to.equal(true);
        });

        it('should sync isDiscarded correctly', function() {
            expect(gmCard.isDiscarded()).to.equal(false);
            expect(gcCard.isDiscarded()).to.equal(false);

            gmCard.setIsDiscarded(true);

            expect(gmCard.isDiscarded()).to.equal(true);
            expect(gcCard.isDiscarded()).to.equal(true);
        });

        it('should sync isFrozen correctly', function() {
            expect(gmCard.isFrozen()).to.equal(false);
            expect(gcCard.isFrozen()).to.equal(false);

            gmCard.setIsFrozen(true);

            expect(gmCard.isFrozen()).to.equal(true);
            expect(gcCard.isFrozen()).to.equal(true);
        });

        it('should sync isImmune correctly', function() {
            expect(gmCard.isImmune()).to.equal(false);
            expect(gcCard.isImmune()).to.equal(false);

            gmCard.setIsImmune(true);

            expect(gmCard.isImmune()).to.equal(true);
            expect(gcCard.isImmune()).to.equal(true);
        });

        it('should sync isSilenced correctly', function() {
            expect(gmCard.isSilenced()).to.equal(false);
            expect(gcCard.isSilenced()).to.equal(false);

            gmCard.setIsSilenced(true);

            expect(gmCard.isSilenced()).to.equal(true);
            expect(gcCard.isSilenced()).to.equal(true);
        });

        it('should sync hasCharge correctly', function() {
            expect(gmCard.hasCharge()).to.equal(false);
            expect(gcCard.hasCharge()).to.equal(false);

            gmCard.setHasCharge(true);

            expect(gmCard.hasCharge()).to.equal(true);
            expect(gcCard.hasCharge()).to.equal(true);
        });

        it('should sync hasDeathrattle correctly', function() {
            expect(gmCard.hasDeathrattle()).to.equal(false);
            expect(gcCard.hasDeathrattle()).to.equal(false);

            gmCard.setHasDeathrattle(true);

            expect(gmCard.hasDeathrattle()).to.equal(true);
            expect(gcCard.hasDeathrattle()).to.equal(true);
        });

        it('should sync hasDivineShield correctly', function() {
            expect(gmCard.hasDivineShield()).to.equal(false);
            expect(gcCard.hasDivineShield()).to.equal(false);

            gmCard.setHasDivineShield(true);

            expect(gmCard.hasDivineShield()).to.equal(true);
            expect(gcCard.hasDivineShield()).to.equal(true);
        });

        it('should sync hasEffectTrigger correctly', function() {
            expect(gmCard.hasEffectTrigger()).to.equal(false);
            expect(gcCard.hasEffectTrigger()).to.equal(false);

            gmCard.setHasEffectTrigger(true);

            expect(gmCard.hasEffectTrigger()).to.equal(true);
            expect(gcCard.hasEffectTrigger()).to.equal(true);
        });

        it('should sync hasStealth correctly', function() {
            expect(gmCard.hasStealth()).to.equal(false);
            expect(gcCard.hasStealth()).to.equal(false);

            gmCard.setHasStealth(true);

            expect(gmCard.hasStealth()).to.equal(true);
            expect(gcCard.hasStealth()).to.equal(true);
        });

        it('should sync hasTaunt correctly', function() {
            expect(gmCard.hasTaunt()).to.equal(false);
            expect(gcCard.hasTaunt()).to.equal(false);

            gmCard.setHasTaunt(true);

            expect(gmCard.hasTaunt()).to.equal(true);
            expect(gcCard.hasTaunt()).to.equal(true);
        });

        it('should sync hasWindfury correctly', function() {
            expect(gmCard.hasWindfury()).to.equal(false);
            expect(gcCard.hasWindfury()).to.equal(false);

            gmCard.setHasWindfury(true);

            expect(gmCard.hasWindfury()).to.equal(true);
            expect(gcCard.hasWindfury()).to.equal(true);
        });
    });

});
