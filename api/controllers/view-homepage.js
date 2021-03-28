module.exports = {


  friendlyName: 'View homepage',


  description: 'Display "" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/homepage'
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
