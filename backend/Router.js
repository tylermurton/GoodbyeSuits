const bcrpyt = require('bcrypt');


class Router {
    constructor(app, db) {
        this.login(app, db);
        this.logout(app, db);
        this.isLoggedIn(app, db);

    }

    login(app, db) {
        app.post('/login', (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            
            username = username.toLowerCase();

            if (username.length > 12 || password.length > 12) {
                res.json({
                    success: false,
                    msg: 'An error occured, please try again'
                })
                return;
            } 
            let cols = [username];
            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data, fields) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error occured, please try again'
                    })
                    return;
                }
                if (data && data.length === 1) {
                    bcrpyt.compare(password, data[0].password), (bcrpytErr, verified) => {
                        if (verified) {
                            req.session.userID = data[0].id;
                            res.json({
                                success: true,
                                username: data[0].username
                            })
                            return;
                        } else {
                            res.json({
                                success: false,
                                msg: 'Invalid password'
                            })
                        }
                    }
                }
            })
        })

    }

    logout(app, db) {

    }

    isLoggedIn(app, db) {

    }
}

module.exports = Router;