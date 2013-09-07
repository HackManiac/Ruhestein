/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Base model', function() {

    var Model = Ruhestein.common.Model;

    it('should be a function', function() {
        expect(Model).to.be.a('function');
    });

});
