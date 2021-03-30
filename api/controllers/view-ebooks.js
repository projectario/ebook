module.exports = {


  friendlyName: 'View books',


  description: 'Display "E book" page.',


  inputs: {
    genre: {
      type: 'string',
    },
    isBestSeller: {
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


  fn: async function ({ genre, isBestSeller, isEditorChoice, price }) {

    let sessionUserId = this.req.session.userId;
    let user;
    if (sessionUserId) {
      user = await User.findOne({ id: sessionUserId });
    }

    let listOfBooks = await Book.find().meta({ skipRecordVerification: true });
    // let listOfBooks;


    // Search only based on Genre
    if (genre == 'All' || genre == 'Genre') {
      listOfBooks = await Book.find().meta({ skipRecordVerification: true });
    } else {
      listOfBooks = await Book.find({ genre: genre }).meta({ skipRecordVerification: true });
    }

    // Search only based on Genre and If the book is bestseller or editor choice
    if ((genre == 'All' || genre == 'Genre') && isBestSeller) {
      listOfBooks = await Book.find({ isBestSeller: isBestSeller }).meta({ skipRecordVerification: true });
    } else if (isBestSeller) {
      listOfBooks = await Book.find({ genre: genre, isBestSeller: isBestSeller }).meta({ skipRecordVerification: true });
    } else if (isEditorChoice) {
      listOfBooks = await Book.find({ genre: genre, isEditorChoice: isEditorChoice }).meta({ skipRecordVerification: true });
    }

    // Search only based on Genre and If the book is bestseller and edditor choice
    if ((genre == "All" || genre == 'Genre') && isBestSeller && isEditorChoice) {
      listOfBooks = await Book.find({ isBestSeller: isBestSeller, isEditorChoice: isEditorChoice }).meta({ skipRecordVerification: true });
    }
    // Search only based on Genre and editor choice
    if ((genre == 'All' || genre == 'Genre') && isEditorChoice) {
      listOfBooks = await Book.find({ isEditorChoice: isEditorChoice }).meta({ skipRecordVerification: true });
    }






    return { listOfBooks, genre, isBestSeller, isEditorChoice, user };

  }


}
