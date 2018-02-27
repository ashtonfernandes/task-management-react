module.exports = function(app) {
    if (process.env.NODE_ENV === 'production') {
        app.enable('trust proxy');
        app.use(function(req, res, next) {
            if (req.secure) {
                // request was via https, so do no special handling
                next();
            } else {
                // request was via http, so redirect to https
                res.redirect('https://' + req.headers.host + req.url);
            }
        });
    }
    
};