/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Database', function() {

    var Database = Ruhestein.gameMaster.Database;

    it('should be an object', function() {
        expect(Database).to.be.a('object');
    });

    it('should have a method "selectCardDataFromFilter"', function() {
        expect(Database.selectCardDataFromFilter).to.be.a('function');
    });

    it('should have a method "mixin"', function() {
        expect(Database.mixin).to.be.a('function');
    });

    it('should find card data by a filter function', function() {
        var filter = function(cardData) {
            return ((cardData.name === 'Druid of the Claw'));
        };

        var cardDataSet = Database.selectCardDataFromFilter(filter);

        expect(cardDataSet).to.be.an('array');
        expect(cardDataSet.length).to.equal(3);
    });

    it('should find card data by a filter object', function() {
        var filter = {
            name: 'Druid of the Claw'
        };

        var cardDataSet = Database.selectCardDataFromFilter(filter);

        expect(cardDataSet).to.be.an('array');
        expect(cardDataSet.length).to.equal(3);
    });

    it('should mix into object correctly', function() {
        var owner = {}, game = {};

        var result = Database.mixin(owner, game);

        expect(result).to.equal(owner);
    });

    it('should create a Card from card data', function() {
        var owner = Database.mixin({}, null);

        var cardData = owner.selectCardDataFromFilter({
            name: 'Druid of the Claw',
            isToken: false
        }) [0];

        expect(cardData).to.be.an('object');

        var card = owner.createCardFromCardData(cardData);

        expect(card).to.be.an('object');

    });

    

    var checkCardEffectImplementation = function(card) {
        var result;
        var effects = card.getEffects();
        if (effects.length > 0) {
            result = true;

            for (var i = 0; i < effects.length; i++) {
                var effect = effects.at(i);

                var effectId = effect.getId();

                if (effectId) {
                    var cast = effect._originalCast;

                    if (cast.toString().indexOf('No cast implementation for effect') >= 0) {
                        result = false;
                    }
                }
            }
        }
        return result;
    };

    var checkCardEffectImplementationsByFilter = function(filter) {
        var db = Ruhestein.gameMaster.Database;

        var owner = {}, game = {};
        db.mixin(owner, game);

        var cardDataSet = db.selectCardDataFromFilter(filter);

        var nyiCards = [];

        for (var i = 0; i < cardDataSet.length; i++) {
            var cardData = cardDataSet [i];

            var card = owner.createCardFromCardData(cardData);

            if (checkCardEffectImplementation(card) === false) {
                nyiCards.push(card.getEffectId());
            }
        }

        return {
            totalCards: cardDataSet.length,
            nyiCards: nyiCards
        };
    };

    var checkCardEffectImplementationsByHearthpwnUrl = function(url) {
        var _ = require('underscore');

        var db = Ruhestein.gameMaster.Database;

        var owner = {}, game = {};
        db.mixin(owner, game);

        var deck = owner.createDeckFromHearthpwnDeckbuilderUrl('???', url);

        var cards = deck.getCards();

        var nyiCards = [];

        for (var i = 0; i < cards.length; i++) {
            var card = cards.at(i);

            if (checkCardEffectImplementation(card) === false) {
                nyiCards.push(card.getEffectId());
            }
        }

        nyiCards = _.uniq(nyiCards).sort();

        return {
            totalCards: cards.length,
            nyiCards: nyiCards
        };
    };

    var expectCardEffectImplementation = function(name, getInfo) {
        var info = getInfo(), nameExt;
        if (info.totalCards === 0) {
            it(name, function() {
                expect(info.totalCards).to.not.equal(0);
            });
        } else if (info.nyiCards.length === 0) {
            nameExt = ' (NYI ' + info.nyiCards.length + '/' + info.totalCards + ')';
            it(name + nameExt, function() {
                expect(info.nyiCards.length).to.equal(0);
            });
        } else {
            nameExt = ' (NYI ' + info.nyiCards.length + '/' + info.totalCards + ': ' + info.nyiCards.join(', ') + ')';
            xit(name + nameExt, function() {
                expect(info.nyiCards.length).to.equal(0);
            });
        }
    };

    expectCardEffectImplementation('should have all hero powers implemented', function() {
        return checkCardEffectImplementationsByFilter({
            type: 'heroPower',
            set: 'basic',
            isToken: true
        });
    });


    var basicDecks = [
        'http://www.hearthpwn.com/deckbuilder/priest#31:2;173:2;315:2;326:2;356:2;409:2;410:2;415:2;431:2;434:2;576:2;600:2;611:2;624:2;663:2',
        'http://www.hearthpwn.com/deckbuilder/warrior#1:2;47:2;55:2;60:2;174:2;193:2;227:2;326:2;357:2;414:2;472:2;624:2;632:2;646:2;663:2',
        'http://www.hearthpwn.com/deckbuilder/warlock#31:2;55:2;84:2;122:2;174:2;208:2;323:2;332:2;340:2;410:2;479:2;535:2;560:2;647:2;659:2',
        'http://www.hearthpwn.com/deckbuilder/mage#15:2;55:2;56:2;60:2;174:2;184:2;326:2;435:2;489:2;502:2;522:2;535:2;576:2;589:2;595:2',
        'http://www.hearthpwn.com/deckbuilder/druid#15:2;60:2;76:2;173:2;184:2;258:2;282:2;356:2;414:2;480:2;532:2;535:2;548:2;576:2;611:2',
        'http://www.hearthpwn.com/deckbuilder/hunter#15:2;47:2;76:2;86:2;163:2;167:2;173:2;225:2;407:2;435:2;502:2;519:2;535:2;564:2;576:2',
        'http://www.hearthpwn.com/deckbuilder/shaman#27:2;55:2;76:2;146:2;174:2;216:2;233:2;270:2;326:2;410:2;491:2;502:2;560:2;604:2;663:2',
        'http://www.hearthpwn.com/deckbuilder/paladin#41:2;108:2;246:2;250:2;310:2;325:2;350:2;356:2;394:2;414:2;435:2;499:2;502:2;564:2;603:2',
        'http://www.hearthpwn.com/deckbuilder/rogue#41:2;60:2;87:2;184:2;205:2;246:2;325:2;356:2;385:2;435:2;471:2;472:2;564:2;568:2;576:2'
    ];

    var i;
    for (i = 0; i < basicDecks.length; i++) {
        var basicDeck = basicDecks [i];

        var clazz = /([a-z]+)#/.exec(basicDeck) [1];

        expectCardEffectImplementation('should have the ' + clazz + ' basic deck implemented', function() {
            return checkCardEffectImplementationsByHearthpwnUrl(basicDeck);
        });

        expectCardEffectImplementation('should have all ' + clazz + ' specific cards implemented', function() {
            return checkCardEffectImplementationsByFilter({
                'class': clazz
            });
        });
    }

    var customDecks = [
        'http://www.hearthpwn.com/deckbuilder/shaman#47:2;146:2;216:2;233:2;246:2;256:2;270:2;310:2;326:2;390:2;435:2;491:2;502:2;636:2;663:2',
        'http://www.hearthpwn.com/deckbuilder/paladin#23:1;29:1;100:1;108:1;158:2;189:1;247:1;260:2;283:1;293:2;350:2;383:1;394:2;428:2;435:2;500:1;502:2;577:1;604:2;648:2;',
        // 'http://www.hearthpwn.com/deckbuilder/druid#120:1;154:2;221:1;258:1;282:2;388:2;459:2;463:1;464:2;479:2;495:1;532:2;548:2;587:2;605:1;619:1;620:2;633:2;667:1',
    ];

    for (i = 0; i < customDecks.length; i++) {
        var customDeck = customDecks [i];

        expectCardEffectImplementation('should have the custom deck ' + customDeck + ' implemented', function() {
            return checkCardEffectImplementationsByHearthpwnUrl(customDeck);
        });
    }

    expectCardEffectImplementation('should have all Missions set cards dummy-implemented', function() {
        return checkCardEffectImplementationsByFilter({
            set: 'missions'
        });
    });

    expectCardEffectImplementation('should have all basic cards implemented', function() {
        return checkCardEffectImplementationsByFilter({
            rarity: 'free'
        });
    });

    expectCardEffectImplementation('should have all common cards implemented', function() {
        return checkCardEffectImplementationsByFilter({
            rarity: 'common'
        });
    });

    expectCardEffectImplementation('should have all rare cards implemented', function() {
        return checkCardEffectImplementationsByFilter({
            rarity: 'rare'
        });
    });

    expectCardEffectImplementation('should have all epic cards implemented', function() {
        return checkCardEffectImplementationsByFilter({
            rarity: 'epic'
        });
    });

    expectCardEffectImplementation('should have all legendary cards implemented', function() {
        return checkCardEffectImplementationsByFilter({
            rarity: 'legendary'
        });
    });


    expectCardEffectImplementation('should have all effects implemented', function() {
        return checkCardEffectImplementationsByFilter(function() {
            return true;
        });
    });

    var _ = require('underscore');
    // var rdb = Ruhestein.gameMaster.RawDatabase;
    // var allEffects = _.uniq(_.map(rdb.cardDataSet, function(cardData) { return cardData.description; })).sort(); 

    // var allEffectParts = _.flatten(_.map(allEffects, function(effect) { return effect.split(/\.[\s]*/); }));
    // allEffectParts = _.uniq(_.map(allEffectParts, function(effectPart) { return effectPart.replace(/^(Battlecry: |Combo: )/, '').trim(); })).sort();
    // console.log(allEffects, allEffectParts);

    var findMissingEffectsByFilter = function(missingEffectIds, filter) {
        var Ruhestein = require('ruhestein');
        var owner = Ruhestein.gameMaster.Database.mixin({}, {});
        missingEffectIds = missingEffectIds.split(', ');
        var missingCardData = _.flatten(_.map(missingEffectIds, function(effectId) {
            return owner.selectCardDataFromFilter({
                effectId: effectId
            });
        }));

        return _.pluck(_.filter(missingCardData, filter), 'effectId');
    };

});
