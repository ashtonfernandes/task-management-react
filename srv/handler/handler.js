const fs = require('fs');
const request = require('request');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
const async = require('async');

class Handler {
    constructor(io) {
        this.io = io;
    }
}

module.exports = Handler;
