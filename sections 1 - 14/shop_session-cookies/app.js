const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const mongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://michaelh:Jordan01@cluster0-kdwgq.mongodb.net/shop';

const app = express();
const store = new mongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use((req, res, next) => {
  User.findById('5cdd6c40db60e116981cccfb')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose.connect(MONGODB_URI)
  .then(result => {
    console.log('Connected!');
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'mike',
          email: 'mike@mah',
          cart: {
            items: [

            ]
          }
        });
        user.save();
      }
    })
    app.listen(3000);
  }).catch(err => console.log(err));