const Router = require('express').Router;
var authApi = require('./auth');

module.exports = (handler) => {
	let api = Router();
    api.use('/login', authApi(handler));
	return api;
};
