/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('GameClient', function() {

    var gameClient = Ruhestein.gameClient;

    it('should be an object', function() {
        expect(gameClient).to.be.an('object');
    });

});
