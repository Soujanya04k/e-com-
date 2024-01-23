/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const CartItems = require("../models/CartItems");





module.exports = {
  friendlyName: 'Add Products',

  description: 'Add Products to the cart..',

  extendedDescription: `This action attempts to create the user record in the database with the
        specified email address.  Then, if such a user exists,not created for another time
        .`,

  inputs: {
    
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

  exits: {
    success: {
      description: 'Open the Home page',
    },

    someThingWentWrong: {
      description: 'Something went wrong! Please try again',
      statusCode: 500,
    },
  },
  fn: async function (inputs) {
    console.log('inputs', inputs);
    try {
      const item = await CartItems.findOrCreate(
        { itemId: inputs.itemId },
        {
          itemId: inputs.itemId,
          name: inputs.name,
          new_price: inputs.new_price,
        }
      );
      if (item.wasCreated) {
        sails.log(
          item,'item from findorcreate()'
        );
      }
      
      } catch (err) {
      console.log('err', err);
    }
  },
};
