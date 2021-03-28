module.exports = {


  friendlyName: 'View e book',


  description: 'Display "E book" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/eBooks'
    }

  },


  fn: async function () {


    let user = null;
    if (this.req.session.userId) {
      user = await User.findOne({ id: this.req.session.userId })
      return { user }
    }
    // Respond with view.
    return { user };
  }


};
