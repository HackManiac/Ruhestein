/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Deck model', function() {

    var Deck = Ruhestein.gameMaster.Deck;

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });

});
