/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Ruhestein = require('ruhestein');



describe('GameMaster', function() {

    it('should be an object', function() {
        expect(Ruhestein.gameMaster).to.be.an('object');
    });

    require('./models/account-test');
    require('./models/buff-test');
    require('./models/card-test');
    require('./models/deck-test');
    require('./models/effect-test');
    require('./models/game-card-test');
    require('./models/game-test');
    require('./models/player-test');

    require('./database/database-test');

    require('./connector-test');
    
});
