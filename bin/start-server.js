#!/usr/bin/env node



/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Server = require('../src/ruhestein/server/server');



Server.start();
console.log('Server started...');
