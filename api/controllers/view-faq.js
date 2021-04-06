module.exports = {


  friendlyName: 'View faq',


  description: 'Display "Faq" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/faq'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
