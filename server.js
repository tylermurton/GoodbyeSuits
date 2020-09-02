const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Router = require('./Router');

const PORT = process.env.PORT || 3001;

app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'ByeSuitsLogin'
    
});

db.connect(function(err) {
    if (err) {
        console.log('DB error');
        throw err;
        return false;
    }
    console.log("connected to sql db")
});

const sessionStore = new MySQLStore({
    expiration: (1825 * 86400 * 1000),
    endConnectionOnClose: false
}, db);

app.use(session({
    key: '10294857asldkfasdfk',
    secret: 'lakdsfiq3opefrgjvkjn34',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (1825 * 86400 * 1000),
        httpOnly: false
    }
}));

new Router(app, db);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });