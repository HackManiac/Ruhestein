/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('GameCard model', function() {

    var GameCard = Ruhestein.gameMaster.GameCard;

    it('should be a function', function() {
        expect(GameCard).to.be.a('function');
    });

});
