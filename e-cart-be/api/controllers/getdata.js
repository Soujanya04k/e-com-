/**
 * GetdataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fn: async function () {
    try {
      const data = await CartItems.find();
      console.log(data, 'find() data');
      return data;
    } catch (err) {
      console.log(err, 'error in getdatacontroller');
    }
  },
};
