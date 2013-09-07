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

    

    // var _ = require('underscore');
    // var rdb = Ruhestein.gameMaster.RawDatabase;
    // var allEffects = _.uniq(_.map(rdb.cardDataSet, function(cardData) { return cardData.description; })).sort(); 

    // var allEffectParts = _.flatten(_.map(allEffects, function(effect) { return effect.split(/\.[\s]*/); }));
    // allEffectParts = _.uniq(_.map(allEffectParts, function(effectPart) { return effectPart.replace(/^(Battlecry: |Combo: )/, '').trim(); })).sort();
    // console.log(allEffects, allEffectParts);

});
