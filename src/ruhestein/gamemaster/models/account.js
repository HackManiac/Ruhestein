/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Model = require('./base/model');
var Collection = require('./base/collection');

var Database = require('../database/database');



var Account = Model.extend({

    _database: null,

    defaults: function() {
        return {

            accountName: null,

            realName: null,

            decks: new Collection()

        };
    },

    initialize: function() {
        Database.mixin(this);
    },

    getDatabase: function() {
        return this._database;
    },

    getAccountName: function() {
        return this.get('accountName');
    },

    getRealName: function() {
        return this.get('realName');
    },

    getDecks: function() {
        return this.get('decks');
    }

});



module.exports = Account;
