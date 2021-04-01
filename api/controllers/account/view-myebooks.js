// const Purchase = require("../../models/Userbook");
// const Book = require("../../models/Book");

//   ^ comment out or erase this lines!!!!! 
//  || Model.find is not a function!!!

module.exports = {

    friendlyName: 'View e book',
    description: 'Display eBook - id page.',

    exits: {
        success: {
            viewTemplatePath: 'pages/account/myebooks'
        }
    },


    fn: async function () {
        // find the user that is logged in 
        let sessionUserId = this.req.session.userId;
        let user;
        if (sessionUserId) {
            user = await User.findOne({ id: sessionUserId });
        }

        // Find the transactions of the logged in user.
        let myebookTransactions = await Userbook.find({ userId: user.id }).meta({ skipRecordVerification: true });;

        // Extract the bookId from the purchased ebooks.
        let myBooksIds = []
        myebookTransactions.forEach(transaction => {
            myBooksIds.push(transaction.bookId)
        });

        // Find my eBooks
        let mylistOfBooks = await Book.find({ id: myBooksIds })

        return { user, mylistOfBooks };
    }


}
