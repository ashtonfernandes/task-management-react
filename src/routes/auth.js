const { Router } = require('express');

module.exports = (handler) => {

    let api = Router();

    api.post('/', (req, res) => {
        let username = req.body.username.toLowerCase();
        let password = req.body.password.toLowerCase();
        if (username == 'test' && password == 'user') {
            return res.status(200).json({ login: true, error: 'none' });
        } else {
            return res.status(200).json({
                login: false,
                error: 'Unable to login. Please check your credentials.'
            });
        }
   });
   return api;
};