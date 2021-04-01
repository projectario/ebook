module.exports = {


  friendlyName: 'View login',


  description: 'Display "Login" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/login',
    },

    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect'
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
