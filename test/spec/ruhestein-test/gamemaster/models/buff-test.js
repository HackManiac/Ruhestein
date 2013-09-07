/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Buff model', function() {

    var Buff = Ruhestein.gameMaster.Buff;

    it('should be a function', function() {
        expect(Buff).to.be.a('function');
    });

});
