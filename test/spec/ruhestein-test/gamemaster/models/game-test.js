/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Game model', function() {

    var Game = Ruhestein.gameMaster.Game;

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    });

});
