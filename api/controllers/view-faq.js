module.exports = {


  friendlyName: 'View faq',


  description: 'Display "Faq" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/faq'
    }

  },


  fn: async function () {

    // find the user that is logged in 
    let sessionUserId = this.req.session.userId;
    let user;
    if (sessionUserId) {
      user = await User.findOne({ id: sessionUserId }).meta({ skipRecordVerification: true });
    }

    return { user };

  }


};
