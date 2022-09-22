exports.signup_get = (req, res, next) => {
    res.render('signup', {
        title: 'Sign Up',
    });
};

exports.signup_post = (req, res, next) => {
    res.send('signup POST 未实现');
};

exports.signin_get = (req, res, next) => {
    res.render('signin', {
        title: 'Sign In',
    });
};

exports.signin_post = (req, res, next) => {
    res.send('signin POST 未实现');
};