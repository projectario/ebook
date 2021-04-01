module.exports = {


  friendlyName: 'View signup',


  description: 'Display "Signup" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/signup',
    },

    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect'
    }

  },


  fn: async function () {

    if (this.req.session.userId) throw {redirect: '/'}
    
    let user = null;
    if (this.req.session.userId) {
      user = await User.findOne({ id: this.req.session.userId })
      return { user }
    }
    // Respond with view.
    return { user };

  }


};

