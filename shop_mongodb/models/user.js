const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart;   // {items: []}
    this._id = new ObjectId(id);
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp._id === product._id;
    // });

    const updatedCart = {items: [{ productId: new Object(product._id), quantity: 1}]};
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        {_id: this._id}, 
        { $set: { cart: updatedCart } }
      );
  }

  static findById(userId) {
    const db = getDb();
    return db.collection('users').findOne({_id: new ObjectId(userId)});
  }
}

module.exports = User;