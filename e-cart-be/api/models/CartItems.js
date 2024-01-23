/**
 * CartItems.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {



    itemId: {
      type: 'number'
    },

    name: {
      type: 'string'
    },

    new_price: {
      type: 'number'
    },



  },
  findOrCreate: async function (criteria, values) {
    try {
      let item = await CartItems.findOne(criteria);
      if (!item) {
        item = await CartItems.create(values).fetch();
        return { item, wasCreated: true };
      }
      return { item, wasCreated: false };
    } catch (err) {
      throw err;
    }
  }


};
