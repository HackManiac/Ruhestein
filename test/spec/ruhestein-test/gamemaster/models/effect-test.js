/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('Effect model', function() {

    var Effect = Ruhestein.gameMaster.Effect;

    it('should be a function', function() {
        expect(Effect).to.be.a('function');
    });

});
