module.exports = {


  friendlyName: 'View e book',


  description: 'Display "E book" page.',


  inputs: {
    genre: {
      type: 'string',
    }

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/eBooks'
    }

  },


  fn: async function ({ genre }) {

    let sessionUserId = this.req.session.userId;
    let user = await User.findOne({ id: sessionUserId });
    sails.log(user)


    // let listOfBooks = await Book.find();
    let listOfBooks;
    if (genre == 'All' || genre == undefined) {
      listOfBooks = await Book.find().meta({ skipRecordVerification: true });

      // } else {
      //   listOfBooks = await Book.find({ genre: genre }).meta({ skipRecordVerification: true });

      // }
      return { listOfBooks, genre, user };
    }


  }
}