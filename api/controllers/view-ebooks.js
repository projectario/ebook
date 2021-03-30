module.exports = {


  friendlyName: 'View books',


  description: 'Display "E book" page.',


  inputs: {
    genre: {
      type: 'string',
    },
    isBestseller: {
      type: 'boolean'
    },
    isEditorChoice: {
      type: 'boolean'
    }

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/ebooks'
    }

  },


  fn: async function ({ genre, isBestseller, isEditorChoice }) {

    let sessionUserId = this.req.session.userId;
    let user;
    if (sessionUserId) {
      user = await User.findOne({ id: sessionUserId });
    }

    // let listOfBooks = await Book.find();
    let listOfBooks;

    if (genre == 'All' || genre == undefined) {
      listOfBooks = await Book.find().meta({ skipRecordVerification: true });

    } else {
      listOfBooks = await Book.find({ genre: genre, isBestseller: isBestseller, isEditorChoice: isEditorChoice }).meta({ skipRecordVerification: true });
      console.log(genre)
      console.log(isBestseller)
      console.log(isEditorChoice)
    }
    return { listOfBooks, genre, isBestseller, isEditorChoice, user };
  }


}
