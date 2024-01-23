/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const User = require('../models/User');

// const User = require("../models/User");

module.exports = {
  friendlyName: 'Add User',

  description: 'Add user to the application..',

  extendedDescription: `This action attempts to create the user record in the database with the
        specified email address.  Then, if such a user exists,not created for another time
        .`,

  inputs: {
    fullName: {
      type: 'string',
    },

    email: {
      type: 'string',
    },

    password: {
      type: 'string',
    },

    confirmPassword: {
      type: 'string',
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
      const user = await User.findOrCreate(
        { fullName: inputs.fullName },
        {
          email: inputs.email,
          confirmPassword: inputs.confirmPassword,
          fullName: inputs.fullName,
          password: inputs.password,
        }
      );
      if (user.wasCreated) {
        sails.log(
          'created a new user' + inputs.fullName,
          inputs.email,
          inputs.password,
          inputs.confirmPassword
        );
      } else {
        sails.log('Found existing user' + inputs.fullName);
      }

      return inputs;
    } catch (err) {
      console.log('err', err);
    }
  },
};
