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
    },
    price: {
      type: 'number'
    },
    searchBook: {
      type: 'string'
    }

  },

  exits: {
    success: {
      viewTemplatePath: 'pages/ebooks'
    }
  },


  fn: async function ({ genre, isBestSeller, isEditorChoice, price, searchBook }) {

    let sessionUserId = this.req.session.userId;
    let user;
    if (sessionUserId) {
      user = await User.findOne({ id: sessionUserId });
    }


    let listOfBooks = await Book.find().meta({ skipRecordVerification: true });

    // If the users is searching by title at the SearchBar
    if (searchBook) {
      listOfBooks = await Book.find({ title: { 'contains': searchBook } }).meta({ skipRecordVerification: true });
    } else {

      // Search by (Genre OR price) and by (Genre AND price)
      if ((genre == 'All' || genre == 'Genre')) {
        listOfBooks = await Book.find().where({ price: { '<=': parseInt(price) } }).meta({ skipRecordVerification: true });
      } else if (price) {
        listOfBooks = await Book.find({ genre: genre, price: { '<=': parseInt(price) } }).meta({ skipRecordVerification: true });
      }
      // Search by (isBestSeller) and by (Genre AND isBestSeller) and by price
      if ((genre == 'All' || genre == 'Genre') && isBestSeller) {
        listOfBooks = await Book.find({ isBestSeller: isBestSeller }).meta({ skipRecordVerification: true });
      } else if (isBestSeller) {
        listOfBooks = await Book.find({ genre: genre, isBestSeller: isBestSeller, price: { '<=': parseInt(price) } }).meta({ skipRecordVerification: true });
      }
      // Search by (isEditorChoice) and by (Genre AND isEditorChoice) and by price
      if ((genre == 'All' || genre == 'Genre') && isEditorChoice) {
        listOfBooks = await Book.find({ isEditorChoice: isEditorChoice }).meta({ skipRecordVerification: true });
      } else if (isEditorChoice) {
        listOfBooks = await Book.find({ genre: genre, isEditorChoice: isEditorChoice, price: { '<=': parseInt(price) } }).meta({ skipRecordVerification: true });
      }
      // Search by (isBestSeller AND isEditorChoice) and by (Genre AND (isBestSeller AND isEditorChoice)) and by price
      if ((genre == "All" || genre == 'Genre') && isBestSeller && isEditorChoice) {
        listOfBooks = await Book.find({ or: [{ isBestSeller: isBestSeller }, { isEditorChoice: isEditorChoice }] }).meta({ skipRecordVerification: true });
      } else if (isBestSeller && isEditorChoice) {
        listOfBooks = await Book.find({ genre: genre, isBestSeller: isBestSeller, isEditorChoice: isEditorChoice, price: { '<=': parseInt(price) } }).meta({ skipRecordVerification: true });
      }

    }

    return { listOfBooks, genre, isBestSeller, isEditorChoice, user, price };
  }
}
