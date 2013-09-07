/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Card model', function() {

    var Card = Ruhestein.gameMaster.Card;

    it('should be a function', function() {
        expect(Card).to.be.a('function');
    });

});
