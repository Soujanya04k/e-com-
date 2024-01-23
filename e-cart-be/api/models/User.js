/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {



    fullName: {
      type: 'string'
    },

    email: {
      type: 'string'
    },

    password: {
      type: 'string'
    },

    confirmPassword: {
      type: 'string'
    },

  },
  findOrCreate: async function (criteria, values) {
    try {
      let user = await User.findOne(criteria);
      if (!user) {
        user = await User.create(values).fetch();
        return { user, wasCreated: true };
      }
      return { user, wasCreated: false };
    } catch (err) {
      throw err;
    }
  }


};
